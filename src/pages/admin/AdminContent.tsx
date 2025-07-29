import { useState } from "react"
import { Plus, Edit, Trash2, Image, FileText, Calendar, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

export function AdminContent() {
  const [activeTab, setActiveTab] = useState("blog")

  const blogPosts = [
    {
      id: 1,
      title: "The Future of Web Development: Trends to Watch in 2024",
      status: "Published",
      author: "Alex Thompson",
      date: "2024-03-15",
      views: 1250
    },
    {
      id: 2,
      title: "Building Scalable Cloud Applications: Best Practices",
      status: "Draft",
      author: "Maria Rodriguez",
      date: "2024-03-10",
      views: 0
    }
  ]

  const events = [
    {
      id: 1,
      title: "AI in Software Development Workshop",
      status: "Upcoming",
      date: "2024-04-15",
      attendees: 32
    },
    {
      id: 2,
      title: "Cloud Architecture Seminar",
      status: "Upcoming",
      date: "2024-04-22",
      attendees: 78
    }
  ]

  const testimonials = [
    {
      id: 1,
      client: "John Smith",
      company: "TechStart Inc.",
      status: "Approved",
      rating: 5,
      date: "2024-01-15"
    },
    {
      id: 2,
      client: "Sarah Johnson",
      company: "HealthTech Solutions",
      status: "Pending",
      rating: 5,
      date: "2024-02-20"
    }
  ]

  const galleryImages = [
    {
      id: 1,
      title: "Modern Office Space",
      category: "Office",
      uploadDate: "2024-01-15",
      size: "2.4 MB"
    },
    {
      id: 2,
      title: "Team Meeting",
      category: "Team",
      uploadDate: "2024-01-20",
      size: "1.8 MB"
    }
  ]

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Content Management</h1>
        <p className="text-slate-600 dark:text-slate-300 mt-2">
          Manage your website content, blog posts, events, and media.
        </p>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="blog" className="flex items-center space-x-2">
            <FileText className="h-4 w-4" />
            <span>Blog Posts</span>
          </TabsTrigger>
          <TabsTrigger value="events" className="flex items-center space-x-2">
            <Calendar className="h-4 w-4" />
            <span>Events</span>
          </TabsTrigger>
          <TabsTrigger value="testimonials" className="flex items-center space-x-2">
            <Users className="h-4 w-4" />
            <span>Testimonials</span>
          </TabsTrigger>
          <TabsTrigger value="gallery" className="flex items-center space-x-2">
            <Image className="h-4 w-4" />
            <span>Gallery</span>
          </TabsTrigger>
        </TabsList>

        {/* Blog Posts */}
        <TabsContent value="blog">
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-xl font-bold text-slate-900 dark:text-white">
                Blog Posts
              </CardTitle>
              <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
                <Plus className="mr-2 h-4 w-4" />
                New Post
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {blogPosts.map((post) => (
                  <div key={post.id} className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                    <div className="flex-1">
                      <h3 className="font-semibold text-slate-900 dark:text-white">{post.title}</h3>
                      <div className="flex items-center space-x-4 mt-2 text-sm text-slate-600 dark:text-slate-400">
                        <span>By {post.author}</span>
                        <span>{post.date}</span>
                        <span>{post.views} views</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Badge variant={post.status === 'Published' ? 'default' : 'secondary'}>
                        {post.status}
                      </Badge>
                      <Button variant="ghost" size="sm">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Events */}
        <TabsContent value="events">
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-xl font-bold text-slate-900 dark:text-white">
                Events
              </CardTitle>
              <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
                <Plus className="mr-2 h-4 w-4" />
                New Event
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {events.map((event) => (
                  <div key={event.id} className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                    <div className="flex-1">
                      <h3 className="font-semibold text-slate-900 dark:text-white">{event.title}</h3>
                      <div className="flex items-center space-x-4 mt-2 text-sm text-slate-600 dark:text-slate-400">
                        <span>{event.date}</span>
                        <span>{event.attendees} attendees</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Badge variant="default">{event.status}</Badge>
                      <Button variant="ghost" size="sm">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Testimonials */}
        <TabsContent value="testimonials">
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-slate-900 dark:text-white">
                Testimonials
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                    <div className="flex-1">
                      <h3 className="font-semibold text-slate-900 dark:text-white">{testimonial.client}</h3>
                      <div className="flex items-center space-x-4 mt-2 text-sm text-slate-600 dark:text-slate-400">
                        <span>{testimonial.company}</span>
                        <span>{testimonial.rating} stars</span>
                        <span>{testimonial.date}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Badge variant={testimonial.status === 'Approved' ? 'default' : 'secondary'}>
                        {testimonial.status}
                      </Badge>
                      <Button variant="ghost" size="sm">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Gallery */}
        <TabsContent value="gallery">
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-xl font-bold text-slate-900 dark:text-white">
                Gallery Images
              </CardTitle>
              <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
                <Plus className="mr-2 h-4 w-4" />
                Upload Images
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {galleryImages.map((image) => (
                  <div key={image.id} className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                    <div className="flex-1">
                      <h3 className="font-semibold text-slate-900 dark:text-white">{image.title}</h3>
                      <div className="flex items-center space-x-4 mt-2 text-sm text-slate-600 dark:text-slate-400">
                        <span>{image.category}</span>
                        <span>{image.uploadDate}</span>
                        <span>{image.size}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Button variant="ghost" size="sm">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}