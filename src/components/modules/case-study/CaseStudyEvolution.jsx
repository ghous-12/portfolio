export function CaseStudyEvolution({ evolution, onOpenStage }) {
  return (
    <section className="case-block case-evolution" id="evolution">
      <p className="eyebrow">{evolution.kicker}</p>
      <h2>
        {evolution.title}
        <br />
        {evolution.titleLine2}
      </h2>
      <p>{evolution.intro}</p>

      <div className="case-evolution__grid">
        {evolution.stages.map((stage) => (
          <button
            aria-label={`Expand stage ${stage.index}: ${stage.title}`}
            className="case-stage"
            key={stage.id}
            type="button"
            onClick={() => onOpenStage(stage)}
          >
            <div className="case-stage__image">
              <img alt={stage.alt} loading="lazy" src={stage.image} />
            </div>
            <div className="case-stage__copy">
              <div className="case-stage__eyebrow">
                <span>{stage.index}</span>
                <span>{stage.eyebrow}</span>
              </div>
              <h3>{stage.title}</h3>
              <p>{stage.description}</p>
            </div>
          </button>
        ))}
      </div>

      <div className="case-evolution__chronology">
        <b>{evolution.chronologyStart}</b>
        <div className="case-evolution__line" />
        <b>{evolution.chronologyEnd}</b>
      </div>
    </section>
  );
}
