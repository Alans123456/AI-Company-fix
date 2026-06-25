import { Outlet } from "react-router-dom";
import { AdminSidebar } from "./AdminSidebar";
import { AdminHeader } from "./AdminHeader";
import { MouseAnimationBackground } from "./MouseAnimationBackground";

export function AdminLayout() {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      {/* Global mouse animation background */}
      <MouseAnimationBackground />

      {/* Main admin content */}
      <div className="relative z-10">
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
    </div>
  );
}
