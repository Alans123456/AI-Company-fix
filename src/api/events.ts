import api from './api';

export interface Event {
  _id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  type: string;
  speakers?: string[];
  agenda?: string[];
  registrationRequired: boolean;
  maxAttendees?: number;
  currentAttendees: number;
  image: string;
}

// Description: Get all events
// Endpoint: GET /api/events
// Request: {}
// Response: { events: Event[] }
export const getEvents = () => {
  // Mocking the response
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        events: [
          {
            _id: '1',
            title: 'AI in Software Development Workshop',
            description: 'Learn how to integrate AI tools into your development workflow for increased productivity.',
            date: '2024-04-15',
            time: '10:00 AM',
            location: 'Tech Hub, Downtown',
            type: 'Workshop',
            speakers: ['Dr. Sarah Chen', 'Mark Johnson'],
            agenda: ['Introduction to AI Tools', 'Hands-on Coding Session', 'Q&A Session'],
            registrationRequired: true,
            maxAttendees: 50,
            currentAttendees: 32,
            image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800'
          },
          {
            _id: '2',
            title: 'Cloud Architecture Seminar',
            description: 'Deep dive into modern cloud architecture patterns and best practices.',
            date: '2024-04-22',
            time: '2:00 PM',
            location: 'Virtual Event',
            type: 'Seminar',
            speakers: ['Alex Rodriguez', 'Jennifer Liu'],
            agenda: ['Microservices Architecture', 'Serverless Computing', 'Security Best Practices'],
            registrationRequired: true,
            maxAttendees: 100,
            currentAttendees: 78,
            image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800'
          },
          {
            _id: '3',
            title: 'Mobile Development Meetup',
            description: 'Monthly meetup for mobile developers to share experiences and network.',
            date: '2024-04-30',
            time: '6:00 PM',
            location: 'Innovation Center',
            type: 'Meetup',
            registrationRequired: false,
            currentAttendees: 25,
            image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800'
          }
        ]
      });
    }, 500);
  });
  // Uncomment the below lines to make an actual API call
  // try {
  //   return await api.get('/api/events');
  // } catch (error) {
  //   throw new Error(error?.response?.data?.error || error.message);
  // }
};

// Description: Register for event
// Endpoint: POST /api/events/:id/register
// Request: { name: string, email: string, phone?: string }
// Response: { success: boolean, message: string }
export const registerForEvent = (eventId: string, data: { name: string; email: string; phone?: string }) => {
  // Mocking the response
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        success: true,
        message: 'Successfully registered for the event!'
      });
    }, 500);
  });
  // Uncomment the below lines to make an actual API call
  // try {
  //   return await api.post(`/api/events/${eventId}/register`, data);
  // } catch (error) {
  //   throw new Error(error?.response?.data?.error || error.message);
  // }
};