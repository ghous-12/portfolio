import { FiCheckCircle } from "react-icons/fi";
import { Button } from "../../shared/Button.jsx";
import { Container } from "../../shared/Container.jsx";
import { SectionHeading } from "../../shared/SectionHeading.jsx";
import { services } from "../../../utils/constant.jsx";

export function Services() {
  return (
    <section className="section services-section" id="services">
      <Container>
        <div className="section-split">
          <SectionHeading
            eyebrow="Services"
            intro="Offerings shaped by actual React, Shopify, validation, and tooling experience."
            title="Focused frontend services for product teams and commerce builds."
          />
          <Button to="/#contact" variant="secondary">
            Start a conversation
          </Button>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <article className="service-card" key={service.title}>
              <span className="service-card__number">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              {service.deliverables?.length ? (
                <ul>
                  {service.deliverables.map((deliverable) => (
                    <li key={deliverable}>
                      <FiCheckCircle aria-hidden="true" />
                      {deliverable}
                    </li>
                  ))}
                </ul>
              ) : null}
              {service.technologies?.length ? (
                <div className="service-card__tech">
                  {service.technologies.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>
              ) : null}
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
