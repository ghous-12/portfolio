export function CaseStudyChallenge({ challenge }) {
  return (
    <section className="case-block" id="challenge">
      <p className="eyebrow">{challenge.kicker}</p>
      <h2>{challenge.title}</h2>

      {challenge.paragraphs.map((paragraph) => (
        <p key={paragraph.slice(0, 48)}>{paragraph}</p>
      ))}

      <p>
        There was another unusual constraint:{" "}
        <strong>{challenge.constraintHighlight}</strong>
        {challenge.constraintAfter}
      </p>

      <h2>{challenge.roleTitle}</h2>
      <p>{challenge.roleIntro}</p>
      <p>{challenge.responsibilitiesIntro}</p>
      <ul>
        {challenge.responsibilities.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <p>
        {challenge.ownershipNoteBefore}
        <strong>{challenge.ownershipNoteStrong}</strong>
        {challenge.ownershipNoteAfter}
      </p>
    </section>
  );
}
