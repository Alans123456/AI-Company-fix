import api from './api';

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  country?: string;
  jobTitle?: string;
  jobDetails: string;
  budget?: string;
  timeline?: string;
}

export interface Inquiry {
  _id: string;
  name: string;
  email: string;
  phone?: string;
  company?: string;
  country?: string;
  jobTitle?: string;
  jobDetails: string;
  budget?: string;
  timeline?: string;
  status: 'New' | 'In Progress' | 'Responded' | 'Closed';
  priority: 'Low' | 'Medium' | 'High';
  submittedAt: string;
  notes?: string[];
}

// Description: Submit contact form
// Endpoint: POST /api/contact
// Request: ContactFormData
// Response: { success: boolean, message: string, confirmationNumber: string }
export const submitContactForm = (data: ContactFormData) => {
  console.log('Submitting contact form:', data);
  // Mocking the response
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        success: true,
        message: 'Thank you for your inquiry! We will get back to you within 24 hours.',
        confirmationNumber: `INQ-${Date.now()}`
      });
    }, 1000);
  });
  // Uncomment the below lines to make an actual API call
  // try {
  //   return await api.post('/api/contact', data);
  // } catch (error) {
  //   throw new Error(error?.response?.data?.error || error.message);
  // }
};

// Description: Get all inquiries (Admin only)
// Endpoint: GET /api/admin/inquiries
// Request: {}
// Response: { inquiries: Inquiry[] }
export const getInquiries = () => {
  // Mocking the response
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        inquiries: [
          {
            _id: '1',
            name: 'John Smith',
            email: 'john@techstart.com',
            phone: '+1-555-0123',
            company: 'TechStart Inc.',
            country: 'United States',
            jobTitle: 'CEO',
            jobDetails: 'We need a complete e-commerce platform with inventory management and payment processing.',
            budget: '$10,000 - $25,000',
            timeline: '3-4 months',
            status: 'New',
            priority: 'High',
            submittedAt: '2024-03-15T10:30:00Z',
            notes: []
          },
          {
            _id: '2',
            name: 'Sarah Johnson',
            email: 'sarah@healthtech.com',
            phone: '+1-555-0456',
            company: 'HealthTech Solutions',
            country: 'Canada',
            jobTitle: 'CTO',
            jobDetails: 'Mobile app development for patient management system with HIPAA compliance.',
            budget: '$25,000 - $50,000',
            timeline: '4-6 months',
            status: 'In Progress',
            priority: 'High',
            submittedAt: '2024-03-14T14:20:00Z',
            notes: ['Initial consultation completed', 'Waiting for technical requirements']
          },
          {
            _id: '3',
            name: 'Michael Chen',
            email: 'michael@ecocommerce.com',
            company: 'EcoCommerce',
            country: 'Australia',
            jobTitle: 'Founder',
            jobDetails: 'Need help with cloud migration and performance optimization.',
            budget: '$5,000 - $10,000',
            timeline: '1-2 months',
            status: 'Responded',
            priority: 'Medium',
            submittedAt: '2024-03-13T09:15:00Z',
            notes: ['Quote sent', 'Follow-up scheduled']
          }
        ]
      });
    }, 500);
  });
  // Uncomment the below lines to make an actual API call
  // try {
  //   return await api.get('/api/admin/inquiries');
  // } catch (error) {
  //   throw new Error(error?.response?.data?.error || error.message);
  // }
};

// Description: Update inquiry status
// Endpoint: PUT /api/admin/inquiries/:id
// Request: { status: string, priority: string, notes?: string }
// Response: { success: boolean, message: string }
export const updateInquiry = (id: string, data: { status?: string; priority?: string; notes?: string }) => {
  console.log('Updating inquiry:', id, data);
  // Mocking the response
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        success: true,
        message: 'Inquiry updated successfully'
      });
    }, 500);
  });
  // Uncomment the below lines to make an actual API call
  // try {
  //   return await api.put(`/api/admin/inquiries/${id}`, data);
  // } catch (error) {
  //   throw new Error(error?.response?.data?.error || error.message);
  // }
};