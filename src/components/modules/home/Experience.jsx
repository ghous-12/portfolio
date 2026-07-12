import { useLayoutEffect, useRef } from "react";
import { FiBriefcase } from "react-icons/fi";
import { Container } from "../../shared/Container.jsx";
import { SectionHeading } from "../../shared/SectionHeading.jsx";
import { gsap, ScrollTrigger } from "../../../lib/gsap.js";
import { useReducedMotion } from "../../../hooks/useReducedMotion.js";
import { experience } from "../../../utils/constant.jsx";

export function Experience() {
  const pinRef = useRef(null);
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const reducedMotion = useReducedMotion();

  useLayoutEffect(() => {
    if (
      reducedMotion ||
      !pinRef.current ||
      !sectionRef.current ||
      !trackRef.current
    ) {
      return undefined;
    }

    const media = gsap.matchMedia();

    const ctx = gsap.context(() => {
      media.add("(min-width: 1024px)", () => {
        const section = sectionRef.current;
        const track = trackRef.current;
        const viewport = track.parentElement;
        let resizeFrame = 0;

        const getDistance = () =>
          Math.max(0, track.scrollWidth - viewport.clientWidth);

        const setScrollDistance = () => {
          section.style.setProperty(
            "--experience-scroll-distance",
            `${getDistance()}px`,
          );
        };

        const refreshMeasurements = () => {
          cancelAnimationFrame(resizeFrame);
          resizeFrame = requestAnimationFrame(() => {
            setScrollDistance();
            ScrollTrigger.refresh();
          });
        };

        setScrollDistance();

        const tween = gsap.to(track, {
          ease: "none",
          scrollTrigger: {
            end: "bottom bottom",
            invalidateOnRefresh: true,
            onRefreshInit: setScrollDistance,
            scrub: 0.75,
            start: "top top",
            trigger: section,
          },
          x: () => -getDistance(),
        });

        window.addEventListener("resize", refreshMeasurements);
        refreshMeasurements();

        return () => {
          cancelAnimationFrame(resizeFrame);
          window.removeEventListener("resize", refreshMeasurements);
          tween.scrollTrigger?.kill();
          tween.kill();
          gsap.set(track, { clearProps: "transform" });
          section.style.removeProperty("--experience-scroll-distance");
        };
      });
    }, sectionRef);

    return () => {
      media.revert();
      ctx.revert();
    };
  }, [reducedMotion]);

  return (
    <section ref={sectionRef} className="section experience-section" id="experience">
      <div ref={pinRef} className="experience-pin">
        <Container className="experience-heading">
          <SectionHeading
            align="center"
            eyebrow="Experience"
            intro="A focused timeline of shipped systems, form architecture, Shopify integrations, and frontend product work."
            title="Production work, carried from architecture to release."
          />
        </Container>

        <div className="experience-viewport">
          <div ref={trackRef} className="experience-track">
            {experience.map((item) => (
              <article className="experience-card" key={`${item.company}-${item.role}`}>
                <div className="experience-card__icon">
                  <FiBriefcase aria-hidden="true" />
                </div>
                <p className="experience-card__date">
                  {item.startDate} - {item.endDate}
                </p>
                <h3>{item.role}</h3>
                <p className="experience-card__company">
                  {item.company}
                  {item.location ? `, ${item.location}` : ""}
                </p>
                {item.summary ? <p>{item.summary}</p> : null}
                {item.achievements?.length ? (
                  <ul>
                    {item.achievements.map((achievement) => (
                      <li key={achievement}>{achievement}</li>
                    ))}
                  </ul>
                ) : null}
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
