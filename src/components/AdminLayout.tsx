import { Outlet } from "react-router-dom"
import { AdminSidebar } from "./AdminSidebar"
import { AdminHeader } from "./AdminHeader"

export function AdminLayout() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      <AdminSidebar />
      <div className="lg:pl-64">
        <AdminHeader />
        <main className="pt-16 p-6">
          <div className="mx-auto max-w-7xl">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  )
}