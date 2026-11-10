import { Container } from "../../shared/Container.jsx";

export function CaseStudyStats({ stats }) {
  return (
    <section aria-label="Project highlights" className="case-stats">
      <Container>
        <ul className="case-stats__grid">
          {stats.map((stat) => (
            <li key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
