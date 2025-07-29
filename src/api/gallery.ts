import api from './api';

export interface GalleryImage {
  _id: string;
  title: string;
  url: string;
  category: string;
  description?: string;
  uploadDate: string;
}

// Description: Get gallery images
// Endpoint: GET /api/gallery
// Request: {}
// Response: { images: GalleryImage[] }
export const getGalleryImages = () => {
  // Mocking the response
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        images: [
          {
            _id: '1',
            title: 'Modern Office Space',
            url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800',
            category: 'Office',
            description: 'Our modern workspace designed for collaboration',
            uploadDate: '2024-01-15'
          },
          {
            _id: '2',
            title: 'Team Meeting',
            url: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800',
            category: 'Team',
            description: 'Weekly team collaboration session',
            uploadDate: '2024-01-20'
          },
          {
            _id: '3',
            title: 'Tech Conference 2024',
            url: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800',
            category: 'Events',
            description: 'Annual technology conference presentation',
            uploadDate: '2024-02-01'
          },
          {
            _id: '4',
            title: 'Project Dashboard',
            url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800',
            category: 'Projects',
            description: 'Analytics dashboard for client project',
            uploadDate: '2024-02-10'
          },
          {
            _id: '5',
            title: 'Development Setup',
            url: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800',
            category: 'Office',
            description: 'Developer workstation setup',
            uploadDate: '2024-02-15'
          },
          {
            _id: '6',
            title: 'Client Presentation',
            url: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800',
            category: 'Events',
            description: 'Presenting solutions to our clients',
            uploadDate: '2024-02-20'
          }
        ]
      });
    }, 500);
  });
  // Uncomment the below lines to make an actual API call
  // try {
  //   return await api.get('/api/gallery');
  // } catch (error) {
  //   throw new Error(error?.response?.data?.error || error.message);
  // }
};