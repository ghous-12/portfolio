export function CaseStudyEngineering({ engineering }) {
  return (
    <section className="case-block" id="engineering">
      <p className="eyebrow">{engineering.kicker}</p>
      <h2>{engineering.title}</h2>

      {engineering.topics.map((topic) => (
        <article className="case-topic" key={topic.title}>
          <h3>{topic.title}</h3>
          {topic.paragraphs?.map((paragraph) => (
            <p key={paragraph.slice(0, 48)}>{paragraph}</p>
          ))}
          {topic.highlightLabel ? (
            <p>
              <strong>{topic.highlightLabel}</strong>
              {topic.highlightText}
            </p>
          ) : null}
          {topic.formula ? (
            <p className="case-topic__formula">
              <strong>{topic.formula}</strong>
            </p>
          ) : null}
          {topic.closing ? <p>{topic.closing}</p> : null}
          {topic.closingParagraphs?.map((paragraph) => (
            <p key={paragraph.slice(0, 48)}>{paragraph}</p>
          ))}
        </article>
      ))}
    </section>
  );
}
