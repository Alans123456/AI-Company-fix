import api from './api';

export interface Project {
  _id: string;
  title: string;
  description: string;
  industry: string;
  technologies: string[];
  images: string[];
  client: string;
  testimonial?: string;
  completedDate: string;
  challenge: string;
  solution: string;
}

// Description: Get all projects
// Endpoint: GET /api/projects
// Request: {}
// Response: { projects: Project[] }
export const getProjects = () => {
  // Mocking the response
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        projects: [
          {
            _id: '1',
            title: 'E-commerce Platform',
            description: 'Modern e-commerce solution with advanced features',
            industry: 'E-commerce',
            technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
            images: ['https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800', 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800'],
            client: 'TechStore Inc.',
            testimonial: 'Excellent work! The platform exceeded our expectations.',
            completedDate: '2024-01-15',
            challenge: 'Building a scalable e-commerce platform with real-time inventory management',
            solution: 'Implemented microservices architecture with real-time updates using WebSocket'
          },
          {
            _id: '2',
            title: 'Healthcare Management System',
            description: 'Comprehensive healthcare management solution',
            industry: 'Healthcare',
            technologies: ['Vue.js', 'Python', 'PostgreSQL', 'Docker'],
            images: ['https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800', 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800'],
            client: 'MedCare Solutions',
            testimonial: 'Revolutionary system that improved our efficiency by 300%',
            completedDate: '2023-12-20',
            challenge: 'Creating HIPAA-compliant system with complex patient data management',
            solution: 'Built secure, encrypted system with role-based access control'
          },
          {
            _id: '3',
            title: 'Financial Analytics Dashboard',
            description: 'Real-time financial data visualization and analytics',
            industry: 'Finance',
            technologies: ['Angular', 'C#', 'SQL Server', 'Power BI'],
            images: ['https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800', 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800'],
            client: 'FinTech Corp',
            completedDate: '2024-02-10',
            challenge: 'Processing and visualizing large volumes of financial data in real-time',
            solution: 'Implemented data streaming pipeline with advanced caching mechanisms'
          }
        ]
      });
    }, 500);
  });
  // Uncomment the below lines to make an actual API call
  // try {
  //   return await api.get('/api/projects');
  // } catch (error) {
  //   throw new Error(error?.response?.data?.error || error.message);
  // }
};