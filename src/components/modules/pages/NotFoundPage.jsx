import { Button } from "../../shared/Button.jsx";
import { Container } from "../../shared/Container.jsx";
import { useDocumentTitle } from "../../../hooks/useDocumentTitle.js";
import { seo } from "../../../utils/constant.jsx";

export function NotFoundPage() {
  useDocumentTitle(seo.notFound.title, seo.notFound.description);

  return (
    <section className="section not-found">
      <Container>
        <p className="eyebrow">404</p>
        <h1>This page drifted off the route map.</h1>
        <p>The project or page you requested is not available in this portfolio.</p>
        <div className="not-found__actions">
          <Button to="/">Back home</Button>
          <Button to="/projects" variant="ghost">
            View projects
          </Button>
        </div>
      </Container>
    </section>
  );
}
