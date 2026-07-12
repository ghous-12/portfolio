import { useEffect, useRef, useState } from "react";
import {
  FiCode,
  FiDatabase,
  FiGitBranch,
  FiLayers,
  FiPenTool,
  FiShoppingBag,
  FiTool,
} from "react-icons/fi";
import { Container } from "../../shared/Container.jsx";
import { SectionHeading } from "../../shared/SectionHeading.jsx";
import { gsap } from "../../../lib/gsap.js";
import { useReducedMotion } from "../../../hooks/useReducedMotion.js";
import { skillCategories } from "../../../utils/constant.jsx";

const iconMap = {
  code: FiCode,
  design: FiPenTool,
  forms: FiLayers,
  shopify: FiShoppingBag,
  state: FiDatabase,
  tools: FiTool,
};

export function SkillsTabs() {
  const [activeIndex, setActiveIndex] = useState(0);
  const panelRef = useRef(null);
  const tabRefs = useRef([]);
  const reducedMotion = useReducedMotion();
  const activeCategory = skillCategories[activeIndex];

  useEffect(() => {
    if (reducedMotion || !panelRef.current) {
      return undefined;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        panelRef.current,
        { autoAlpha: 0, x: 18 },
        { autoAlpha: 1, duration: 0.35, ease: "power2.out", x: 0 },
      );
    }, panelRef);

    return () => ctx.revert();
  }, [activeIndex, reducedMotion]);

  const moveToTab = (nextIndex) => {
    setActiveIndex(nextIndex);
    tabRefs.current[nextIndex]?.focus();
  };

  const handleKeyDown = (event, index) => {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      moveToTab((index + 1) % skillCategories.length);
    }

    if (event.key === "ArrowLeft") {
      event.preventDefault();
      moveToTab((index - 1 + skillCategories.length) % skillCategories.length);
    }

    if (event.key === "Home") {
      event.preventDefault();
      moveToTab(0);
    }

    if (event.key === "End") {
      event.preventDefault();
      moveToTab(skillCategories.length - 1);
    }
  };

  return (
    <section className="section skills-section" id="skills">
      <Container>
        <SectionHeading
          eyebrow="Skills"
          intro="No decorative percentage bars, just the tools and practices used in real work."
          title="A practical frontend and Shopify toolkit."
        />

        <div className="skills-shell">
          <div aria-label="Skill categories" className="skills-tabs" role="tablist">
            {skillCategories.map((category, index) => {
              const Icon = iconMap[category.icon] || FiGitBranch;
              const selected = activeIndex === index;

              return (
                <button
                  aria-controls={`panel-${category.id}`}
                  aria-selected={selected}
                  className={selected ? "is-active" : ""}
                  id={`tab-${category.id}`}
                  key={category.id}
                  ref={(element) => {
                    tabRefs.current[index] = element;
                  }}
                  role="tab"
                  tabIndex={selected ? 0 : -1}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  onKeyDown={(event) => handleKeyDown(event, index)}
                >
                  <Icon aria-hidden="true" />
                  <span>{category.title}</span>
                </button>
              );
            })}
          </div>

          <div
            aria-labelledby={`tab-${activeCategory.id}`}
            className="skills-panel"
            id={`panel-${activeCategory.id}`}
            ref={panelRef}
            role="tabpanel"
            tabIndex={0}
          >
            <h3>{activeCategory.title}</h3>
            <ul className="skill-pill-list">
              {activeCategory.skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
