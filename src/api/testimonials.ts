import api from './api';

export interface Testimonial {
  _id: string;
  clientName: string;
  clientTitle: string;
  clientCompany: string;
  clientImage?: string;
  rating: number;
  testimonial: string;
  date: string;
  industry: string;
  serviceType: string;
}

// Description: Get all testimonials
// Endpoint: GET /api/testimonials
// Request: {}
// Response: { testimonials: Testimonial[] }
export const getTestimonials = () => {
  // Mocking the response
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        testimonials: [
          {
            _id: '1',
            clientName: 'John Smith',
            clientTitle: 'CEO',
            clientCompany: 'TechStart Inc.',
            clientImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150',
            rating: 5,
            testimonial: 'Outstanding work! The team delivered exactly what we needed and more. Their attention to detail and technical expertise is unmatched.',
            date: '2024-01-15',
            industry: 'Technology',
            serviceType: 'Web Development'
          },
          {
            _id: '2',
            clientName: 'Sarah Johnson',
            clientTitle: 'CTO',
            clientCompany: 'HealthTech Solutions',
            clientImage: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150',
            rating: 5,
            testimonial: 'The mobile app they developed for us has been a game-changer. User engagement increased by 200% within the first month.',
            date: '2024-02-20',
            industry: 'Healthcare',
            serviceType: 'Mobile Development'
          },
          {
            _id: '3',
            clientName: 'Michael Chen',
            clientTitle: 'Founder',
            clientCompany: 'EcoCommerce',
            rating: 5,
            testimonial: 'Professional, reliable, and innovative. They transformed our business with their e-commerce solution.',
            date: '2024-03-10',
            industry: 'E-commerce',
            serviceType: 'Web Development'
          },
          {
            _id: '4',
            clientName: 'Emily Davis',
            clientTitle: 'VP of Operations',
            clientCompany: 'FinanceFlow',
            clientImage: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150',
            rating: 5,
            testimonial: 'Their cloud solution scaled our operations seamlessly. We can now handle 10x more transactions without any issues.',
            date: '2024-01-30',
            industry: 'Finance',
            serviceType: 'Cloud Solutions'
          }
        ]
      });
    }, 500);
  });
  // Uncomment the below lines to make an actual API call
  // try {
  //   return await api.get('/api/testimonials');
  // } catch (error) {
  //   throw new Error(error?.response?.data?.error || error.message);
  // }
};