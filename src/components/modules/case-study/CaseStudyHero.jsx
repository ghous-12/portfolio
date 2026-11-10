import { Container } from "../../shared/Container.jsx";

export function CaseStudyHero({ study }) {
  return (
    <section className="section case-hero">
      <Container>
        <p className="eyebrow">{study.eyebrow}</p>
        <h1>
          {study.titleBefore}
          <span className="case-hero__accent">{study.titleAccent}</span>
        </h1>
        <p className="case-hero__lead">{study.lead}</p>

        <ul aria-label="Project focus" className="tag-list tag-list--large">
          {study.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>

        <figure className="case-hero__figure">
          <img alt={study.heroImage.alt} src={study.heroImage.src} />
          <figcaption className="case-hero__overlay">
            <span>{study.heroImage.overlayLabel}</span>
            <strong>{study.heroImage.overlayStatus}</strong>
          </figcaption>
        </figure>
      </Container>
    </section>
  );
}
