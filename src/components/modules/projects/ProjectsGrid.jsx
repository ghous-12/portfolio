import { useMemo, useState } from "react";
import { ProjectCard } from "./ProjectCard.jsx";
import { projects } from "../../../utils/constant.jsx";

export function ProjectsGrid() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = useMemo(() => {
    const categories = [...new Set(projects.map((project) => project.category).filter(Boolean))];
    return categories.length > 1 ? ["All", ...categories] : [];
  }, []);

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section className="section projects-index-section">
      <div className="container">
        <div className="projects-toolbar">
          <p>
            {filteredProjects.length} project{filteredProjects.length === 1 ? "" : "s"}
          </p>

          {filters.length ? (
            <div aria-label="Filter projects" className="filter-group">
              {filters.map((filter) => (
                <button
                  aria-pressed={activeFilter === filter}
                  className={activeFilter === filter ? "is-active" : ""}
                  key={filter}
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                >
                  {filter}
                </button>
              ))}
            </div>
          ) : null}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              variant={index % 3 === 0 ? "wide" : "standard"}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
