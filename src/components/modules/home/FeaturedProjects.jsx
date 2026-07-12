import { useEffect, useRef } from "react";
import { Button } from "../../shared/Button.jsx";
import { Container } from "../../shared/Container.jsx";
import { SectionHeading } from "../../shared/SectionHeading.jsx";
import { ProjectCard } from "../projects/ProjectCard.jsx";
import { gsap } from "../../../lib/gsap.js";
import { useReducedMotion } from "../../../hooks/useReducedMotion.js";
import { projects } from "../../../utils/constant.jsx";

export function FeaturedProjects() {
  const sectionRef = useRef(null);
  const reducedMotion = useReducedMotion();
  const featuredProjects = projects.filter((project) => project.featured).slice(0, 3);

  useEffect(() => {
    if (reducedMotion || !sectionRef.current) {
      return undefined;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".featured-grid .project-card",
        { autoAlpha: 0, y: 36 },
        {
          autoAlpha: 1,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 72%",
          },
          stagger: 0.12,
          y: 0,
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [reducedMotion]);

  return (
    <section ref={sectionRef} className="section featured-section" id="featured-projects">
      <Container>
        <div className="section-split">
          <SectionHeading
            eyebrow="Featured projects"
            intro="Three selected pieces of work from the project archive."
            title="Systems with clear constraints and real shipping weight."
          />
          <Button to="/projects" variant="secondary">
            All projects
          </Button>
        </div>

        <div className="featured-grid" aria-label="Featured projects">
          {featuredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              variant={index === 0 ? "featured" : "standard"}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
