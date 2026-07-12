import { useParams } from "react-router-dom";
import { ProjectHero } from "../projects/ProjectHero.jsx";
import { ProjectInformation } from "../projects/ProjectInformation.jsx";
import { ProjectMediaCarousel } from "../projects/ProjectMediaCarousel.jsx";
import { NotFoundPage } from "./NotFoundPage.jsx";
import { useDocumentTitle } from "../../../hooks/useDocumentTitle.js";
import { projects, siteConfig } from "../../../utils/constant.jsx";

export function ProjectDetailsPage() {
  const { projectId } = useParams();
  const projectIndex = projects.findIndex((item) => item.id === projectId);
  const project = projects[projectIndex];

  useDocumentTitle(
    project
      ? `${project.title} | ${siteConfig.name}`
      : `Project not found | ${siteConfig.name}`,
    project?.shortDescription || "Project details page.",
  );

  if (!project) {
    return <NotFoundPage />;
  }

  const previousProject =
    projectIndex > 0 ? projects[projectIndex - 1] : projects[projects.length - 1];
  const nextProject =
    projectIndex < projects.length - 1 ? projects[projectIndex + 1] : projects[0];

  return (
    <>
      <ProjectHero project={project} />
      <ProjectMediaCarousel media={project.media} title={project.title} />
      <ProjectInformation
        nextProject={nextProject}
        previousProject={previousProject}
        project={project}
      />
    </>
  );
}
