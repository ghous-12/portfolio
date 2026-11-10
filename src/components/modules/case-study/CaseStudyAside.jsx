export function CaseStudyAside({ toc, facts, factNote }) {
  return (
    <aside className="case-aside">
      <div className="case-aside__card">
        <p className="case-aside__title">On this page</p>
        <nav aria-label="Case study sections">
          {toc.map((item) => (
            <a href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
      </div>

      <div className="case-aside__card">
        <p className="case-aside__title">Project facts</p>
        <dl className="case-aside__facts">
          {facts.map((fact) => (
            <div key={fact.label}>
              <dt>{fact.label}</dt>
              <dd>{fact.value}</dd>
            </div>
          ))}
        </dl>
        <p className="case-aside__note">{factNote}</p>
      </div>
    </aside>
  );
}
