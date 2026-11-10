export function CaseStudyArchitecture({ architecture }) {
  return (
    <section className="case-block case-architecture" id="architecture">
      <p className="eyebrow">{architecture.kicker}</p>
      <h2>{architecture.title}</h2>
      <p>{architecture.intro}</p>

      <div className="case-architecture__grid">
        {architecture.nodes.map((node, index) => (
          <div key={node.title}>
            <div
              className={`case-architecture__node case-architecture__node--${node.variant}`}
            >
              <span className="eyebrow">{node.eyebrow}</span>
              <strong>{node.title}</strong>
              <small>{node.detail}</small>
              {node.pills?.length ? (
                <ul className="tag-list" aria-label="Frontend capabilities">
                  {node.pills.map((pill) => (
                    <li key={pill}>{pill}</li>
                  ))}
                </ul>
              ) : null}
            </div>
            {index < architecture.nodes.length - 1 ? (
              <div aria-hidden="true" className="case-architecture__arrow">
                ↓
              </div>
            ) : null}
          </div>
        ))}
      </div>

      <p className="case-architecture__note">{architecture.note}</p>
    </section>
  );
}
