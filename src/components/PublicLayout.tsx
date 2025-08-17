import { Outlet } from "react-router-dom";
import { PublicHeader } from "./PublicHeader";
import { PublicFooter } from "./PublicFooter";
import { MouseAnimationBackground } from "./MouseAnimationBackground";

export function PublicLayout() {
  return (
    <div className="relative">
      {/* Global mouse animation background */}
      <MouseAnimationBackground />

      {/* Main content */}
      <div className="relative z-10">
        <PublicHeader />
        <main className="pt-16">
          <Outlet />
        </main>
        <PublicFooter />
      </div>
    </div>
  );
}
