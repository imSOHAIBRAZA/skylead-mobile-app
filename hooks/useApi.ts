import { useState, useCallback } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Types for API responses
export interface ApiResponse<T = any> {
  status: string;
  data?: T;
  message?: string;
  error?: string;
}

export interface ApiError {
  message: string;
  status?: number;
  data?: any;
}

export interface UseApiState<T> {
  data: T | null;
  loading: boolean;
  error: ApiError | null;
}

export interface UseApiReturn<T> {
  data: T | null;
  loading: boolean;
  error: ApiError | null;
  execute: (endpoint: string, options?: RequestOptions) => Promise<T>;
  reset: () => void;
}

export interface RequestOptions {
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  body?: any;
  headers?: Record<string, string>;
  params?: Record<string, string | number>;
}

const BASE_URL = 'https://backend.skyleadcrm.io/api';

// Custom hook for API calls
export const useApi = <T = any>(): UseApiReturn<T> => {
  const [state, setState] = useState<UseApiState<T>>({
    data: null,
    loading: false,
    error: null,
  });

  // Get token from secure storage
  const getAuthToken = async (): Promise<string | null> => {
    try {
      const token = await AsyncStorage.getItem('userToken');
      return token;
    } catch (error) {
      console.error('Error getting auth token:', error);
      return null;
    }
  };

  // Build URL with query parameters
  const buildUrl = (endpoint: string, params?: Record<string, string | number>): string => {
    const url = new URL(`${BASE_URL}${endpoint}`);
    
    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        url.searchParams.append(key, String(value));
      });
    }
    
    return url.toString();
  };

  // Main execute function
  const execute = useCallback(async (endpoint: string, options: RequestOptions = {}): Promise<T> => {
    setState(prev => ({ ...prev, loading: true, error: null }));

    try {
      const token = await getAuthToken();
      
      const {
        method = 'GET',
        body,
        headers = {},
        params
      } = options;

      // Build URL with params for GET requests
      const url = buildUrl(endpoint, method === 'GET' ? params : undefined);

      // Default headers
      const defaultHeaders: Record<string, string> = {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      };

      // Add auth token if available
      if (token) {
        defaultHeaders['Authorization'] = `Bearer ${token}`;
      }

      // Merge with custom headers
      const finalHeaders = { ...defaultHeaders, ...headers };

      // Prepare request config
      const requestConfig: RequestInit = {
        method,
        headers: finalHeaders,
      };

      // Add body for non-GET requests
      if (method !== 'GET' && body) {
        if (params) {
          // For POST requests with params, add them to body
          requestConfig.body = JSON.stringify({ ...body, ...params });
        } else {
          requestConfig.body = JSON.stringify(body);
        }
      }

      console.log('API Request:', { url, method, headers: finalHeaders });

      const response = await fetch(url, requestConfig);

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw {
          message: errorData.message || `HTTP Error ${response.status}`,
          status: response.status,
          data: errorData
        };
      }

      const result = await response.json();

      setState(prev => ({
        ...prev,
        data: result,
        loading: false,
        error: null,
      }));

      return result;

    } catch (error: any) {
      console.error('API Error:', error);

      const apiError: ApiError = {
        message: error.message || 'An unexpected error occurred',
        status: error.status,
        data: error.data
      };

      setState(prev => ({
        ...prev,
        data: null,
        loading: false,
        error: apiError,
      }));

      throw apiError;
    }
  }, []);

  // Reset state
  const reset = useCallback(() => {
    setState({
      data: null,
      loading: false,
      error: null,
    });
  }, []);

  return {
    data: state.data,
    loading: state.loading,
    error: state.error,
    execute,
    reset,
  };
};

// Specific hooks for common operations
export const useGet = <T = any>(endpoint: string, params?: Record<string, string | number>) => {
  const api = useApi<T>();
  
  const get = useCallback(() => {
    return api.execute(endpoint, { method: 'GET', params });
  }, [endpoint, params, api]);

  return {
    ...api,
    get,
  };
};

export const usePost = <T = any>() => {
  const api = useApi<T>();
  
  const post = useCallback((endpoint: string, body?: any, params?: Record<string, string | number>) => {
    return api.execute(endpoint, { method: 'POST', body, params });
  }, [api]);

  return {
    ...api,
    post,
  };
};

export const usePut = <T = any>() => {
  const api = useApi<T>();
  
  const put = useCallback((endpoint: string, body?: any, params?: Record<string, string | number>) => {
    return api.execute(endpoint, { method: 'PUT', body, params });
  }, [api]);

  return {
    ...api,
    put,
  };
};

export const useDelete = <T = any>() => {
  const api = useApi<T>();
  
  const deleteRequest = useCallback((endpoint: string, params?: Record<string, string | number>) => {
    return api.execute(endpoint, { method: 'DELETE', params });
  }, [api]);

  return {
    ...api,
    delete: deleteRequest,
  };
};