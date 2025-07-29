import { Link, useLocation } from "react-router-dom"
import { BarChart3, MessageSquare, FileText, Settings, Code2, Home } from "lucide-react"
import { cn } from "@/lib/utils"

const navigation = [
  { name: 'Dashboard', href: '/admin', icon: BarChart3 },
  { name: 'Inquiries', href: '/admin/inquiries', icon: MessageSquare },
  { name: 'Content', href: '/admin/content', icon: FileText },
  { name: 'Analytics', href: '/admin/analytics', icon: BarChart3 },
]

export function AdminSidebar() {
  const location = useLocation()

  return (
    <div className="fixed inset-y-0 left-0 z-50 w-64 bg-white dark:bg-slate-800 border-r border-slate-200 dark:border-slate-700 lg:block hidden">
      <div className="flex h-16 items-center px-6 border-b border-slate-200 dark:border-slate-700">
        <Link to="/" className="flex items-center space-x-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600">
            <Code2 className="h-5 w-5 text-white" />
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Admin Panel
          </span>
        </Link>
      </div>

      <nav className="mt-6 px-3">
        <div className="space-y-1">
          {navigation.map((item) => {
            const isActive = location.pathname === item.href
            return (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "group flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors",
                  isActive
                    ? "bg-blue-50 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300"
                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-700 dark:hover:text-white"
                )}
              >
                <item.icon
                  className={cn(
                    "mr-3 h-5 w-5 flex-shrink-0",
                    isActive
                      ? "text-blue-500 dark:text-blue-300"
                      : "text-slate-400 group-hover:text-slate-500 dark:group-hover:text-slate-300"
                  )}
                />
                {item.name}
              </Link>
            )
          })}
        </div>

        <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-700">
          <Link
            to="/"
            className="group flex items-center px-3 py-2 text-sm font-medium rounded-lg text-slate-600 hover:bg-slate-50 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-700 dark:hover:text-white transition-colors"
          >
            <Home className="mr-3 h-5 w-5 flex-shrink-0 text-slate-400 group-hover:text-slate-500 dark:group-hover:text-slate-300" />
            Back to Website
          </Link>
        </div>
      </nav>
    </div>
  )
}