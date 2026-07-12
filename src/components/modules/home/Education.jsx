import { Container } from "../../shared/Container.jsx";
import { SectionHeading } from "../../shared/SectionHeading.jsx";
import { education } from "../../../utils/constant.jsx";

export function Education() {
  return (
    <section className="section education-section" id="education">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="Education"
          intro="Academic background and current study path."
          title="Computer science foundations in progress."
        />

        <div className="education-list">
          {education.map((item) => (
            <article className="education-card" key={`${item.degree}-${item.institution}`}>
              <p className="eyebrow">
                {item.startDate} - {item.endDate}
              </p>
              <h3>{item.degree}</h3>
              <p>
                {item.institution}
                {item.location ? `, ${item.location}` : ""}
              </p>
              {item.details?.length ? (
                <ul>
                  {item.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
              ) : null}
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
