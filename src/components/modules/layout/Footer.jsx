import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FiMail, FiPhone } from "react-icons/fi";
import { gsap } from "../../../lib/gsap.js";
import { useReducedMotion } from "../../../hooks/useReducedMotion.js";
import {
  contactDetails,
  navigationLinks,
  siteConfig,
  socialLinks,
} from "../../../utils/constant.jsx";

export function Footer() {
  const footerRef = useRef(null);
  const reducedMotion = useReducedMotion();
  const year = new Date().getFullYear();

  useEffect(() => {
    if (reducedMotion || !footerRef.current) {
      return undefined;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".footer-word",
        { autoAlpha: 0.06, y: 48 },
        {
          autoAlpha: 0.14,
          ease: "none",
          scrollTrigger: {
            trigger: footerRef.current,
            scrub: 0.7,
            start: "top bottom",
            end: "bottom bottom",
          },
          y: 0,
        },
      );
    }, footerRef);

    return () => ctx.revert();
  }, [reducedMotion]);

  return (
    <footer ref={footerRef} className="site-footer">
      <div className="container footer-grid">
        <div className="footer-cta">
          <p className="eyebrow">{siteConfig.footer.eyebrow}</p>
          <h2>{siteConfig.footer.ctaTitle}</h2>
          <Link className="button button--primary" to="/#contact">
            <span>{contactDetails.cta}</span>
          </Link>
        </div>

        <div className="footer-meta">
          <a href={`mailto:${contactDetails.email}`}>
            <FiMail aria-hidden="true" />
            {contactDetails.email}
          </a>
          <a href={`tel:${contactDetails.phone.replaceAll(" ", "")}`}>
            <FiPhone aria-hidden="true" />
            {contactDetails.phone}
          </a>

          {socialLinks.length ? (
            <div className="footer-socials">
              {socialLinks.map((link) => {
                const Icon = link.icon;

                return (
                  <a
                    href={link.href}
                    key={link.href}
                    rel="noopener noreferrer"
                    target="_blank"
                    aria-label={link.label}
                  >
                    {Icon ? <Icon aria-hidden="true" /> : null}
                    <span>{link.label}</span>
                  </a>
                );
              })}
            </div>
          ) : null}
        </div>

        <nav aria-label="Footer navigation" className="footer-nav">
          {navigationLinks.map((link) => (
            <Link key={link.href} to={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>

        <p className="footer-copy">
          &copy; {year} {siteConfig.name}. {siteConfig.footer.credit}
        </p>
      </div>
      <p aria-hidden="true" className="footer-word">
        {siteConfig.name}
      </p>
    </footer>
  );
}
