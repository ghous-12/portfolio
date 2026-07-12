import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import {
  contactDetails,
  navigationLinks,
  siteConfig,
} from "../../../utils/constant.jsx";

export function Navbar() {
  const location = useLocation();
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    if (location.pathname !== "/") {
      return undefined;
    }

    const sectionIds = navigationLinks
      .map((link) => link.sectionId)
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries.find((entry) => entry.isIntersecting);
        if (visibleEntry) {
          setActiveSection(visibleEntry.target.id);
        }
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: 0 },
    );

    sectionIds.forEach((id) => {
      const section = document.getElementById(id);
      if (section) {
        observer.observe(section);
      }
    });

    return () => observer.disconnect();
  }, [location.pathname]);

  const handleNavigation = (event, link) => {
    setMenuOpen(false);

    if (!link.sectionId || location.pathname !== "/") {
      return;
    }

    const target = document.getElementById(link.sectionId);
    if (!target) {
      return;
    }

    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.replaceState(null, "", `#${link.sectionId}`);
    setActiveSection(link.sectionId);
  };

  const isLinkActive = (link) => {
    if (link.route) {
      return location.pathname.startsWith(link.route);
    }

    return location.pathname === "/" && activeSection === link.sectionId;
  };

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <nav aria-label="Primary navigation" className="navbar">
        <Link
          aria-label={`${siteConfig.name} home`}
          className="brand"
          to="/#home"
          onClick={(event) =>
            handleNavigation(event, { sectionId: "home", href: "/#home" })
          }
        >
          <span className="brand__mark">{siteConfig.initials}</span>
          <span className="brand__text">{siteConfig.name}</span>
        </Link>

        <button
          aria-controls="primary-menu"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          className="nav-toggle"
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <FiX aria-hidden="true" /> : <FiMenu aria-hidden="true" />}
        </button>

        <div
          className={`nav-panel ${menuOpen ? "is-open" : ""}`}
          id="primary-menu"
        >
          <ul className="nav-links">
            {navigationLinks.map((link) => (
              <li key={link.href}>
                <Link
                  aria-current={isLinkActive(link) ? "page" : undefined}
                  className={isLinkActive(link) ? "is-active" : ""}
                  to={link.href}
                  onClick={(event) => handleNavigation(event, link)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <Link
            className="nav-cta"
            to="/#contact"
            onClick={(event) =>
              handleNavigation(event, {
                sectionId: "contact",
                href: "/#contact",
              })
            }
          >
            {contactDetails.cta}
          </Link>
        </div>
      </nav>
    </header>
  );
}
