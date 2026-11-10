import { Container } from "../../shared/Container.jsx";
import { Button } from "../../shared/Button.jsx";

export function CaseStudyCta({ cta }) {
  return (
    <section className="section case-cta">
      <Container className="case-cta__inner">
        <div>
          <p className="eyebrow">{cta.kicker}</p>
          <h2>{cta.title}</h2>
          <p>{cta.text}</p>
          <p className="case-cta__smallprint">{cta.smallprint}</p>
        </div>
        <div className="case-cta__actions">
          <Button icon="none" to="/#contact" variant="primary">
            Discuss a project
          </Button>
          <Button href="#top" icon="none" variant="ghost">
            Back to top
          </Button>
        </div>
      </Container>
    </section>
  );
}
