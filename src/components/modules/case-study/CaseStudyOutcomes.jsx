export function CaseStudyOutcomes({ outcomes }) {
  return (
    <section className="case-block" id="outcomes">
      <p className="eyebrow">{outcomes.kicker}</p>
      <h2>{outcomes.title}</h2>

      {outcomes.paragraphs.map((paragraph, index) =>
        paragraph.text ? (
          <p key={`outcome-${index}`}>{paragraph.text}</p>
        ) : (
          <p key={`outcome-${index}`}>
            {paragraph.before}
            <strong>{paragraph.strong}</strong>
            {paragraph.after}
          </p>
        ),
      )}

      <h2>{outcomes.lessonsTitle}</h2>
      {outcomes.lessons.map((lesson) => (
        <p key={lesson.title}>
          <strong>{lesson.title}</strong>
          {lesson.text}
        </p>
      ))}

      <h2>{outcomes.closingTitle}</h2>
      {outcomes.closing.map((paragraph) => (
        <p key={paragraph.slice(0, 48)}>{paragraph}</p>
      ))}
      <p>
        <strong>{outcomes.closingStrong}</strong>
      </p>
    </section>
  );
}
