import { Outlet } from "react-router-dom";
import { Footer } from "../components/modules/layout/Footer.jsx";
import { Navbar } from "../components/modules/layout/Navbar.jsx";
import { PageTransition } from "../components/modules/layout/PageTransition.jsx";
import { ScrollProgress } from "../components/modules/layout/ScrollProgress.jsx";
import { useScrollToTop } from "../hooks/useScrollToTop.js";

export function Layout() {
  useScrollToTop();

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <ScrollProgress />
      <Navbar />
      <main id="main-content">
        <PageTransition>
          <Outlet />
        </PageTransition>
      </main>
      <Footer />
    </>
  );
}
