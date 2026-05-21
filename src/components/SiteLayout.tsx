import { Outlet } from "react-router-dom";
import Footer from "./site/Footer";
import Navbar from "./site/Navbar";

export default function SiteLayout() {
  return (
    <div className="min-h-dvh bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-50">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

