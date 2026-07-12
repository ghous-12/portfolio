import { Link } from "react-router-dom";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

function DetailList({ items, title }) {
  if (!items?.length) {
    return null;
  }

  return (
    <section className="project-info__block">
      <h2>{title}</h2>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
}

export function ProjectInformation({ nextProject, previousProject, project }) {
  const facts = [
    ["Role", project.role],
    ["Client", project.client],
    ["Status", project.status],
    ["Start", project.startDate],
    ["End", project.endDate],
  ].filter(([, value]) => Boolean(value));

  return (
    <section className="section project-info-section">
      <div className="container project-info">
        {facts.length ? (
          <aside className="project-info__facts">
            {facts.map(([label, value]) => (
              <div key={label}>
                <span>{label}</span>
                <strong>{value}</strong>
              </div>
            ))}
          </aside>
        ) : null}

        <div className="project-info__content">
          {project.description ? (
            <section className="project-info__block project-info__block--lead">
              <h2>Overview</h2>
              <p>{project.description}</p>
            </section>
          ) : null}

          <DetailList items={project.objectives} title="Objectives" />
          <DetailList items={project.responsibilities} title="Responsibilities" />
          <DetailList items={project.features} title="Features" />
          <DetailList items={project.challenges} title="Challenges" />
          <DetailList items={project.solutions} title="Solutions" />
          <DetailList items={project.outcomes} title="Outcomes" />

          <nav aria-label="Project navigation" className="project-pagination">
            {previousProject ? (
              <Link to={`/projects/${previousProject.id}`}>
                <FiArrowLeft aria-hidden="true" />
                <span>{previousProject.title}</span>
              </Link>
            ) : null}
            {nextProject ? (
              <Link to={`/projects/${nextProject.id}`}>
                <span>{nextProject.title}</span>
                <FiArrowRight aria-hidden="true" />
              </Link>
            ) : null}
          </nav>
        </div>
      </div>
    </section>
  );
}
