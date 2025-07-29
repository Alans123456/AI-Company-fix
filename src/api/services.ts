import api from './api';

export interface Service {
  _id: string;
  title: string;
  description: string;
  icon: string;
  category: string;
  technologies: string[];
  features: string[];
  pricing: string;
}

// Description: Get all services
// Endpoint: GET /api/services
// Request: {}
// Response: { services: Service[] }
export const getServices = () => {
  // Mocking the response
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        services: [
          {
            _id: '1',
            title: 'Web Development',
            description: 'Custom web applications built with modern technologies',
            icon: 'Globe',
            category: 'Development',
            technologies: ['React', 'Node.js', 'MongoDB'],
            features: ['Responsive Design', 'SEO Optimized', 'Fast Loading'],
            pricing: 'Starting from $5,000'
          },
          {
            _id: '2',
            title: 'Mobile App Development',
            description: 'Native and cross-platform mobile applications',
            icon: 'Smartphone',
            category: 'Development',
            technologies: ['React Native', 'Flutter', 'Swift'],
            features: ['Cross Platform', 'Native Performance', 'App Store Ready'],
            pricing: 'Starting from $8,000'
          },
          {
            _id: '3',
            title: 'Cloud Solutions',
            description: 'Scalable cloud infrastructure and deployment',
            icon: 'Cloud',
            category: 'Infrastructure',
            technologies: ['AWS', 'Azure', 'Docker'],
            features: ['Auto Scaling', 'High Availability', '24/7 Monitoring'],
            pricing: 'Starting from $3,000'
          },
          {
            _id: '4',
            title: 'AI & Machine Learning',
            description: 'Intelligent solutions powered by AI and ML',
            icon: 'Brain',
            category: 'AI/ML',
            technologies: ['Python', 'TensorFlow', 'PyTorch'],
            features: ['Predictive Analytics', 'Natural Language Processing', 'Computer Vision'],
            pricing: 'Starting from $10,000'
          }
        ]
      });
    }, 500);
  });
  // Uncomment the below lines to make an actual API call
  // try {
  //   return await api.get('/api/services');
  // } catch (error) {
  //   throw new Error(error?.response?.data?.error || error.message);
  // }
};