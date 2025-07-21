// API Response Types
export interface ApiCallHistoryItem {
    id: number;
    lead_id: number;
    company_id: number;
    agent_id: number;
    agent_name: string;
    new_status_id: number;
    status_label: string;
    lead_name: string;
    mobile: string;
    created_at: string;
  }
  
  export interface CallHistoryApiResponse {
    status: string;
    company_id: number;
    calls: ApiCallHistoryItem[];
  }
  
  // Component Types (transformed for UI)
  export interface CallHistoryItem {
    id: string;
    name: string;
    phone: string;
    initials: string;
    status: 'accepted' | 'rejected' | 'missed';
    time: string;
    type: string;
    duration: string;
    leadId?: number;
    agentName?: string;
  }
  
  // Utility function to transform API data to component data
  export const transformCallHistoryData = (apiData: ApiCallHistoryItem[]): CallHistoryItem[] => {
    return apiData.map((item) => {
      // Generate initials from lead name
      const nameWords = item?.lead_name?.split(' ');
      const initials = nameWords
        ?.slice(0, 2)
        ?.map(word => word?.charAt(0)?.toUpperCase())
        ?.join('');
  
      // Format created_at to readable time
      const createdDate = new Date(item.created_at);
      const now = new Date();
      const isToday = createdDate.toDateString() === now.toDateString();
      const isYesterday = new Date(now.getTime() - 24 * 60 * 60 * 1000).toDateString() === createdDate.toDateString();
  
      let timeFormatted = '';
      if (isToday) {
        timeFormatted = `Today, ${createdDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;
      } else if (isYesterday) {
        timeFormatted = `Yesterday, ${createdDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;
      } else {
        timeFormatted = createdDate.toLocaleDateString([], { 
          month: 'short', 
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        });
      }
  
      // Map status_label to our expected status types
      let status: 'accepted' | 'rejected' | 'missed' = 'missed';
      if (item.status_label === 'rejected') {
        status = 'rejected';
      } else if (item.status_label === 'accepted' || item.status_label === 'answered') {
        status = 'accepted';
      }
  
      // Determine call type based on lead name or other criteria
      let callType = 'General';
      const leadName = item?.lead_name?.toLowerCase();
      if (leadName?.includes('sales') || leadName?.includes('inquiry')) {
        callType = 'Sales Inquiry';
      } else if (leadName?.includes('support')) {
        callType = 'Support';
      } else if (leadName?.includes('follow')) {
        callType = 'Follow-up';
      } else if (leadName?.includes('consultation')) {
        callType = 'Consultation';
      }
  
      return {
        id: item.id?.toString(),
        name: item.lead_name,
        phone: item.mobile,
        initials,
        status,
        time: timeFormatted,
        type: callType,
        duration: status === 'accepted' ? `${Math.floor(Math.random() * 20) + 5} min` : '-', // Mock duration for now
        leadId: item.lead_id,
        agentName: item.agent_name,
      };
    });
  };