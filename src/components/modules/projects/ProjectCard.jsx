import { Link } from "react-router-dom";
import { FiArrowUpRight, FiExternalLink, FiGithub } from "react-icons/fi";

export function ProjectArtwork({ project }) {
  if (project.coverImage) {
    return (
      <img
        alt={project.coverAlt || project.title}
        className="project-card__image"
        loading="lazy"
        src={project.coverImage}
      />
    );
  }

  return (
    <div aria-hidden="true" className="project-artwork">
      <span>{project.association}</span>
      <strong>{project.title}</strong>
      <small>{project.category}</small>
    </div>
  );
}

export function ProjectCard({ project, variant = "standard" }) {
  const timeline = [project.startDate, project.endDate].filter(Boolean).join(" - ");

  return (
    <article className={`project-card project-card--${variant}`}>
      <Link
        aria-label={`Read more about ${project.title}`}
        className="project-card__visual"
        to={`/projects/${project.id}`}
      >
        <ProjectArtwork project={project} />
      </Link>

      <div className="project-card__body">
        <p className="project-card__meta">
          <span>{project.association}</span>
          {timeline ? <span>{timeline}</span> : null}
          {!timeline && project.status ? <span>{project.status}</span> : null}
        </p>

        <h3>
          <Link to={`/projects/${project.id}`}>{project.title}</Link>
        </h3>

        {project.shortDescription ? <p>{project.shortDescription}</p> : null}

        {project.technologies?.length ? (
          <ul className="tag-list" aria-label={`${project.title} technologies`}>
            {project.technologies.slice(0, 5).map((technology) => (
              <li key={technology}>{technology}</li>
            ))}
          </ul>
        ) : null}

        <div className="project-card__actions">
          <Link className="text-link" to={`/projects/${project.id}`}>
            Read more <FiArrowUpRight aria-hidden="true" />
          </Link>

          {project.liveUrl ? (
            <a
              className="icon-link"
              href={project.liveUrl}
              rel="noopener noreferrer"
              target="_blank"
            >
              <FiExternalLink aria-hidden="true" />
              <span>Live</span>
            </a>
          ) : null}

          {project.githubUrl ? (
            <a
              className="icon-link"
              href={project.githubUrl}
              rel="noopener noreferrer"
              target="_blank"
            >
              <FiGithub aria-hidden="true" />
              <span>GitHub</span>
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}
