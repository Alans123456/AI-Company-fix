import { Outlet } from "react-router-dom";
import { PublicHeader } from "./PublicHeader";
import { PublicFooter } from "./PublicFooter";

export function PublicLayout() {
  return (
    <div className="">
      <PublicHeader />
      <main className="pt-16">
        <Outlet />
      </main>
      <PublicFooter />
    </div>
  );
}
