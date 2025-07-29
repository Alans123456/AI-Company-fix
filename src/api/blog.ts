import api from './api';

export interface BlogPost {
  _id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishDate: string;
  readTime: number;
  category: string;
  tags: string[];
  featuredImage: string;
  featured?: boolean;
}

// Description: Get all blog posts
// Endpoint: GET /api/blog
// Request: {}
// Response: { posts: BlogPost[] }
export const getBlogPosts = () => {
  // Mocking the response
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        posts: [
          {
            _id: '1',
            title: 'The Future of Web Development: Trends to Watch in 2024',
            excerpt: 'Explore the latest trends shaping the future of web development, from AI integration to progressive web apps.',
            content: 'Full article content would go here...',
            author: 'Alex Thompson',
            publishDate: '2024-03-15',
            readTime: 8,
            category: 'Technology',
            tags: ['Web Development', 'AI', 'Trends'],
            featuredImage: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800',
            featured: true
          },
          {
            _id: '2',
            title: 'Building Scalable Cloud Applications: Best Practices',
            excerpt: 'Learn the essential practices for building applications that can scale efficiently in the cloud.',
            content: 'Full article content would go here...',
            author: 'Maria Rodriguez',
            publishDate: '2024-03-10',
            readTime: 12,
            category: 'Cloud Computing',
            tags: ['Cloud', 'Scalability', 'Architecture'],
            featuredImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800'
          },
          {
            _id: '3',
            title: 'Mobile App Security: Protecting User Data',
            excerpt: 'Essential security measures every mobile app developer should implement to protect user data.',
            content: 'Full article content would go here...',
            author: 'David Kim',
            publishDate: '2024-03-05',
            readTime: 10,
            category: 'Mobile Development',
            tags: ['Security', 'Mobile', 'Privacy'],
            featuredImage: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800'
          }
        ]
      });
    }, 500);
  });
  // Uncomment the below lines to make an actual API call
  // try {
  //   return await api.get('/api/blog');
  // } catch (error) {
  //   throw new Error(error?.response?.data?.error || error.message);
  // }
};

// Description: Get single blog post
// Endpoint: GET /api/blog/:id
// Request: {}
// Response: { post: BlogPost }
export const getBlogPost = (id: string) => {
  // Mocking the response
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        post: {
          _id: id,
          title: 'The Future of Web Development: Trends to Watch in 2024',
          excerpt: 'Explore the latest trends shaping the future of web development, from AI integration to progressive web apps.',
          content: `
            <h2>Introduction</h2>
            <p>The web development landscape is constantly evolving, and 2024 promises to bring exciting new trends and technologies that will shape how we build and interact with web applications.</p>
            
            <h2>AI Integration</h2>
            <p>Artificial Intelligence is becoming increasingly integrated into web development workflows, from automated code generation to intelligent user interfaces that adapt to user behavior.</p>
            
            <h2>Progressive Web Apps</h2>
            <p>PWAs continue to bridge the gap between web and native applications, offering offline functionality and native-like experiences across all devices.</p>
            
            <h2>Conclusion</h2>
            <p>As we move forward, staying updated with these trends will be crucial for developers who want to remain competitive in the ever-evolving web development landscape.</p>
          `,
          author: 'Alex Thompson',
          publishDate: '2024-03-15',
          readTime: 8,
          category: 'Technology',
          tags: ['Web Development', 'AI', 'Trends'],
          featuredImage: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800',
          featured: true
        }
      });
    }, 500);
  });
  // Uncomment the below lines to make an actual API call
  // try {
  //   return await api.get(`/api/blog/${id}`);
  // } catch (error) {
  //   throw new Error(error?.response?.data?.error || error.message);
  // }
};