import { CheckCircle, Users, Award, Clock } from "lucide-react"

export function AboutSection() {
  return (
    <section className="py-20 bg-white dark:bg-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
                Building the Future of{" "}
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Digital Innovation
                </span>
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                With over a decade of experience in software development, we've helped hundreds of businesses 
                transform their operations through innovative technology solutions. Our team of expert developers, 
                designers, and strategists work together to deliver exceptional results.
              </p>
            </div>
            
            {/* Key points */}
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-green-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-white">Custom Solutions</h3>
                  <p className="text-slate-600 dark:text-slate-300">Tailored software solutions designed specifically for your business needs</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-green-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-white">Cutting-edge Technology</h3>
                  <p className="text-slate-600 dark:text-slate-300">Latest frameworks and technologies to ensure scalability and performance</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-green-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-white">24/7 Support</h3>
                  <p className="text-slate-600 dark:text-slate-300">Continuous support and maintenance to keep your systems running smoothly</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Image */}
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=600&fit=crop"
                alt="Team collaboration"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center shadow-lg">
              <Users className="h-12 w-12 text-white" />
            </div>
            <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg">
              <Award className="h-10 w-10 text-white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}