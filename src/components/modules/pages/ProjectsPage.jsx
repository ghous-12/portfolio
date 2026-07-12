import { Container } from "../../shared/Container.jsx";
import { ProjectsGrid } from "../projects/ProjectsGrid.jsx";
import { useDocumentTitle } from "../../../hooks/useDocumentTitle.js";
import { projects, seo } from "../../../utils/constant.jsx";

export function ProjectsPage() {
  useDocumentTitle(seo.projects.title, seo.projects.description);

  return (
    <>
      <section className="section page-hero projects-page-hero">
        <Container>
          <p className="eyebrow">Projects</p>
          <h1>Selected systems, tools, and commerce interfaces.</h1>
          <p>
            {projects.length} factual project entries pulled from the resume and
            shaped into case-study routes.
          </p>
        </Container>
      </section>
      <ProjectsGrid />
    </>
  );
}
