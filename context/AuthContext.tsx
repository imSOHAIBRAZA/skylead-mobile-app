// import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// interface AuthContextType {
//   isAuthenticated: boolean;
//   isLoading: boolean;
//   user: any;
//   login: (email: string, password: string) => Promise<void>;
//   logout: () => Promise<void>;
// }

// const AuthContext = createContext<AuthContextType | undefined>(undefined);

// export const useAuth = () => {
//   const context = useContext(AuthContext);
//   if (!context) {
//     throw new Error('useAuth must be used within an AuthProvider');
//   }
//   return context;
// };

// interface AuthProviderProps {
//   children: ReactNode;
// }

// export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [isLoading, setIsLoading] = useState(true);
//   interface User {
//     id: number;
//     email: string;
//     name: string;
//     avatar: string | null;
//   }
  
//   const [user, setUser] = useState<User | null>(null);

//   useEffect(() => {
//     checkAuthStatus();
//   }, []);

//   const checkAuthStatus = async () => {
//     try {
//       const token = await AsyncStorage.getItem('userToken');
//       const userData = await AsyncStorage.getItem('userData');
      
//       if (token && userData) {
//         setIsAuthenticated(true);
//         setUser(JSON.parse(userData));
//       }
//     } catch (error) {
//       console.error('Error checking auth status:', error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const login = async (email: string, password: string) => {
//     try {
//       setIsLoading(true);
      
//       // Simulate API call
//       await new Promise(resolve => setTimeout(resolve, 1500));
      
//       // Mock authentication - replace with your actual API call
//       if (email && password) {
//         const mockToken = 'mock-jwt-token-' + Date.now();
//         const mockUser = {
//           id: 1,
//           email: email,
//           name: email.split('@')[0],
//           avatar: null,
//         };
        
//         await AsyncStorage.setItem('userToken', mockToken);
//         await AsyncStorage.setItem('userData', JSON.stringify(mockUser));
        
//         setIsAuthenticated(true);
//         setUser(mockUser);
//       } else {
//         throw new Error('Invalid credentials');
//       }
//     } catch (error) {
//       throw error;
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const logout = async () => {
//     try {
//       await AsyncStorage.removeItem('userToken');
//       await AsyncStorage.removeItem('userData');
//       setIsAuthenticated(false);
//       setUser(null);
//     } catch (error) {
//       console.error('Error logging out:', error);
//     }
//   };

//   return (
//     <AuthContext.Provider 
//       value={{ 
//         isAuthenticated, 
//         isLoading, 
//         user, 
//         login, 
//         logout 
//       }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// };













// import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// interface AuthContextType {
//   isAuthenticated: boolean;
//   isLoading: boolean;
//   user: any;
//   login: (email: string, password: string) => Promise<void>;
//   logout: () => Promise<void>;
// }

// const AuthContext = createContext<AuthContextType | undefined>(undefined);

// export const useAuth = () => {
//   const context = useContext(AuthContext);
//   if (!context) {
//     throw new Error('useAuth must be used within an AuthProvider');
//   }
//   return context;
// };

// interface AuthProviderProps {
//   children: ReactNode;
// }

// interface User {
//   id: number;
//   email: string;
//   name: string;
//   company_id: number;
//   is_superadmin: number;
//   position: string;
//   role: string;
//   roles: any[];
//   token: string;
// }

// interface LoginResponse {
//   user: User; // Add the user property
//   message: string;
//   success: boolean;
//   token: string; // Add the token property
// }

// export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [isLoading, setIsLoading] = useState(true);
//   const [user, setUser] = useState<User | null>(null);

//   useEffect(() => {
//     checkAuthStatus();
//   }, []);

//   const checkAuthStatus = async () => {
//     try {
//       const token = await AsyncStorage.getItem('userToken');
//       const userData = await AsyncStorage.getItem('userData');
      
//       if (token && userData) {
//         setIsAuthenticated(true);
//         setUser(JSON.parse(userData));
//       }
//     } catch (error) {
//       console.error('Error checking auth status:', error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const login = async (email: string, password: string) => {
//     try {
//       setIsLoading(true);
      
//       const response = await fetch('https://backend.skyleadcrm.io/api/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           'Accept': 'application/json',
//         },
//         body: JSON.stringify({
//           email: email,
//           password: password,
//         }),
//       });

//       const data: LoginResponse = await response.json();
//       console.log('Login response:', data?.data);

//       if (!response.ok) {
//         // Handle different error status codes
//         if (response.status === 401) {
//           throw new Error('Invalid email or password');
//         } else if (response.status === 422) {
//           throw new Error('Please check your email and password format');
//         } else if (response.status >= 500) {
//           throw new Error('Server error. Please try again later');
//         } else {
//           throw new Error(data.message || 'Login failed. Please try again');
//         }
//       }

//       // Check if the response contains the expected data
//       if (!data?.data?.token || !data?.data?.user) {
//         throw new Error('Invalid response from server');
//       }

//       // Store the token and user data
//       await AsyncStorage.setItem('userToken', data?.data?.token);
//       await AsyncStorage.setItem('userData', JSON.stringify(data?.data?.user));
      
//       setIsAuthenticated(true);
//       setUser(data?.data?.user);
      
//     } catch (error) {
//       // Re-throw the error so it can be handled by the calling component
//       if (error instanceof Error) {
//         throw error;
//       } else {
//         throw new Error('Network error. Please check your internet connection');
//       }
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const logout = async () => {
//     try {
//       await AsyncStorage.removeItem('userToken');
//       await AsyncStorage.removeItem('userData');
//       setIsAuthenticated(false);
//       setUser(null);
//     } catch (error) {
//       console.error('Error logging out:', error);
//     }
//   };

//   return (
//     <AuthContext.Provider 
//       value={{ 
//         isAuthenticated, 
//         isLoading, 
//         user, 
//         login, 
//         logout 
//       }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// };





















import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface AuthContextType {
  isAuthenticated: boolean;
  isLoading: boolean;
  user: any;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

interface User {
  id: number;
  email: string;
  name: string;
  company_id: number;
  is_superadmin: number;
  position: string;
  role: string;
  roles: any[];
  // Note: token is stored separately, not in user object
}


export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    checkAuthStatus();
  }, []);

  const checkAuthStatus = async () => {
    try {
      const token = await AsyncStorage.getItem('userToken');
      const userData = await AsyncStorage.getItem('userData');
      
      if (token && userData) {
        setIsAuthenticated(true);
        setUser(JSON.parse(userData));
      }
    } catch (error) {
      console.error('Error checking auth status:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const login = async (email: string, password: string) => {
    try {
      setIsLoading(true);
      
      const response = await fetch('https://backend.skyleadcrm.io/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      const data = await response.json();
      console.log('Login response:', data);

      if (!response.ok) {
        // Handle different error status codes
        if (response.status === 401) {
          throw new Error('Invalid email or password');
        } else if (response.status === 422) {
          throw new Error('Please check your email and password format');
        } else if (response.status >= 500) {
          throw new Error('Server error. Please try again later');
        } else {
          throw new Error(data.message || 'Login failed. Please try again');
        }
      }

      // Check for different possible response structures and separate token
      let userData = null;
      let token = null;

      // Check if response has data property (nested structure)
      if (data?.data && data?.data?.token) {
        const { token: userToken, ...restUserData } = data?.data;
        userData = restUserData;
        token = userToken;
        console.log('Using nested data structure');
      } 
      // Check if response is direct user object
      else if (data?.token && data?.id) {
        const { token: userToken, ...restUserData } = data;
        userData = restUserData;
        token = userToken;
        console.log('Using direct data structure');
      }
      // Check if response has success property
      else if (data?.success && data?.data) {
        const { token: userToken, ...restUserData } = data.data;
        userData = restUserData;
        token = userToken;
        console.log('Using success-based structure');
      }
      else {
        console.log('No valid data structure found');
        throw new Error('Invalid response from server');
      }

      if (!token || !userData) {
        console.log('Missing token or user data:', { token: !!token, userData: !!userData });
        throw new Error('Invalid response from server');
      }

      console.log('Storing user data (without token):', userData);
      console.log('Storing token separately:', token);

      // Store the token separately and user data without token
      await AsyncStorage.setItem('userToken', token);
      await AsyncStorage.setItem('userData', JSON.stringify(userData));
      
      setIsAuthenticated(true);
      setUser(userData);
      
    } catch (error) {
      console.error('Login error:', error);
      // Re-throw the error so it can be handled by the calling component
      if (error instanceof Error) {
        throw error;
      } else {
        throw new Error('Network error. Please check your internet connection');
      }
    } finally {
      setIsLoading(false);
    }
  };

  const logout = async () => {
    try {
      await AsyncStorage.removeItem('userToken');
      await AsyncStorage.removeItem('userData');
      setIsAuthenticated(false);
      setUser(null);
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <AuthContext.Provider 
      value={{ 
        isAuthenticated, 
        isLoading, 
        user, 
        login, 
        logout 
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};