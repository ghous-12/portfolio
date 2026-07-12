import { FiExternalLink, FiGithub } from "react-icons/fi";
import { Button } from "../../shared/Button.jsx";
import { Container } from "../../shared/Container.jsx";
import { ProjectArtwork } from "./ProjectCard.jsx";

export function ProjectHero({ project }) {
  const timeline = [project.startDate, project.endDate].filter(Boolean).join(" - ");
  const metaItems = [
    project.association,
    project.role,
    project.status,
    timeline,
  ].filter(Boolean);

  return (
    <section className="section project-hero">
      <Container className="project-hero__grid">
        <div>
          {project.association ? (
            <p className="eyebrow">{project.association}</p>
          ) : null}
          <h1>{project.title}</h1>
          {project.shortDescription ? <p>{project.shortDescription}</p> : null}

          {metaItems.length ? (
            <ul className="project-hero__meta">
              {metaItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          ) : null}

          {project.technologies?.length ? (
            <ul className="tag-list tag-list--large" aria-label="Technologies">
              {project.technologies.map((technology) => (
                <li key={technology}>{technology}</li>
              ))}
            </ul>
          ) : null}

          <div className="project-hero__actions">
            {project.liveUrl ? (
              <Button external href={project.liveUrl} icon="none" variant="primary">
                <FiExternalLink aria-hidden="true" />
                Live website
              </Button>
            ) : null}
            {project.githubUrl ? (
              <Button external href={project.githubUrl} icon="none" variant="secondary">
                <FiGithub aria-hidden="true" />
                GitHub
              </Button>
            ) : null}
            <Button to="/#contact" variant="ghost">
              Discuss a project
            </Button>
          </div>
        </div>

        <div className="project-hero__visual">
          <ProjectArtwork project={project} />
        </div>
      </Container>
    </section>
  );
}
