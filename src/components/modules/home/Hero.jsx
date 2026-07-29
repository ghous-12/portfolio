import { useEffect, useRef } from "react";
import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import { Button } from "../../shared/Button.jsx";
import { Container } from "../../shared/Container.jsx";
import { gsap } from "../../../lib/gsap.js";
import { useReducedMotion } from "../../../hooks/useReducedMotion.js";
import {
  contactDetails,
  profile,
  siteConfig,
  socialLinks,
} from "../../../utils/constant.jsx";

export function Hero() {
  const heroRef = useRef(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion || !heroRef.current) {
      return undefined;
    }

    const ctx = gsap.context(() => {
      gsap
        .timeline({ defaults: { ease: "power3.out" } })
        .fromTo(".hero__kicker", { autoAlpha: 0, y: 14 }, { autoAlpha: 1, y: 0 })
        .fromTo(
          ".hero__title span",
          { autoAlpha: 0, yPercent: 90 },
          { autoAlpha: 1, duration: 0.9, stagger: 0.08, yPercent: 0 },
          "-=0.1",
        )
        .fromTo(
          [".hero__copy", ".hero__actions", ".hero__contacts"],
          { autoAlpha: 0, y: 22 },
          { autoAlpha: 1, duration: 0.75, stagger: 0.12, y: 0 },
          "-=0.45",
        )
        .fromTo(
          ".hero-orbit",
          { autoAlpha: 0, scale: 0.94 },
          { autoAlpha: 1, duration: 1, scale: 1 },
          "-=0.75",
        );

      gsap.to(".hero-orbit", {
        ease: "none",
        rotate: 5,
        scrollTrigger: {
          trigger: heroRef.current,
          scrub: 0.9,
          start: "top top",
          end: "bottom top",
        },
        y: 70,
      });
    }, heroRef);

    return () => ctx.revert();
  }, [reducedMotion]);

  return (
    <section ref={heroRef} className="hero-section section" id="home">
      <Container className="hero-layout">
        <div className="hero__content">
          <p className="eyebrow hero__kicker">{profile.eyebrow}</p>
          <h1 className="hero__title" aria-label={siteConfig.name}>
            {siteConfig.name.split(" ").map((word) => (
              <span key={word}>{word}</span>
            ))}
          </h1>
          <p className="hero__copy">{profile.intro}</p>

          <div className="hero__actions">
            <Button to="/projects">View projects</Button>
            <Button to="/#contact" variant="ghost">
              Contact me
            </Button>
          </div>

          <div className="hero__contacts" aria-label="Contact details">
            {contactDetails.location ? (
              <span>
                <FiMapPin aria-hidden="true" />
                {contactDetails.location}
              </span>
            ) : null}
            {contactDetails.email ? (
              <a href={`mailto:${contactDetails.email}`}>
                <FiMail aria-hidden="true" />
                {contactDetails.email}
              </a>
            ) : null}
            {contactDetails.phone ? (
              <a href={`tel:${contactDetails.phone.replaceAll(" ", "")}`}>
                <FiPhone aria-hidden="true" />
                {contactDetails.phone}
              </a>
            ) : null}
          </div>

          {socialLinks.length ? (
            <div className="hero__socials">
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

        <div className="hero__visual" aria-hidden="true">
          <div className="hero-orbit">
            {profile.heroTechnologies.map((technology) => (
              <span key={technology}>{technology}</span>
            ))}
          </div>
        </div>
      </Container>
      <a className="scroll-cue" href="#about" aria-label="Scroll to about">
        <span />
      </a>
    </section>
  );
}
