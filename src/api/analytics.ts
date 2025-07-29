import api from './api';

export interface AnalyticsData {
  totalInquiries: number;
  newInquiriesThisWeek: number;
  responseRate: number;
  popularServices: { name: string; count: number }[];
  inquiryTrends: { date: string; count: number }[];
  geographicData: { country: string; count: number }[];
  monthlyComparison: { month: string; inquiries: number; responses: number }[];
}

// Description: Get analytics data
// Endpoint: GET /api/admin/analytics
// Request: {}
// Response: { analytics: AnalyticsData }
export const getAnalytics = () => {
  // Mocking the response
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        analytics: {
          totalInquiries: 156,
          newInquiriesThisWeek: 12,
          responseRate: 94.2,
          popularServices: [
            { name: 'Web Development', count: 45 },
            { name: 'Mobile Development', count: 32 },
            { name: 'Cloud Solutions', count: 28 },
            { name: 'AI/ML Solutions', count: 21 }
          ],
          inquiryTrends: [
            { date: '2024-03-01', count: 8 },
            { date: '2024-03-02', count: 12 },
            { date: '2024-03-03', count: 6 },
            { date: '2024-03-04', count: 15 },
            { date: '2024-03-05', count: 9 },
            { date: '2024-03-06', count: 11 },
            { date: '2024-03-07', count: 14 }
          ],
          geographicData: [
            { country: 'United States', count: 45 },
            { country: 'Canada', count: 28 },
            { country: 'United Kingdom', count: 22 },
            { country: 'Australia', count: 18 },
            { country: 'Germany', count: 15 },
            { country: 'France', count: 12 },
            { country: 'Other', count: 16 }
          ],
          monthlyComparison: [
            { month: 'Jan', inquiries: 42, responses: 39 },
            { month: 'Feb', inquiries: 38, responses: 36 },
            { month: 'Mar', inquiries: 52, responses: 49 },
            { month: 'Apr', inquiries: 24, responses: 23 }
          ]
        }
      });
    }, 500);
  });
  // Uncomment the below lines to make an actual API call
  // try {
  //   return await api.get('/api/admin/analytics');
  // } catch (error) {
  //   throw new Error(error?.response?.data?.error || error.message);
  // }
};