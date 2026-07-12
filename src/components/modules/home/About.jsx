import { Container } from "../../shared/Container.jsx";
import { RevealText } from "../../shared/RevealText.jsx";
import { SectionHeading } from "../../shared/SectionHeading.jsx";
import { profile, siteConfig } from "../../../utils/constant.jsx";
import { ResumeSection } from "./ResumeSection.jsx";

export function About() {
  return (
    <section className="section about-section" id="about">
      <Container>
        <SectionHeading
          eyebrow="About"
          intro="A resume-shaped section with the details that matter most."
          title="Frontend engineering with a builder's bias."
        />

        <div className="about-grid">
          <RevealText as="p" className="about-summary">
            {profile.summary}
          </RevealText>

          <div className="about-facts" aria-label="Profile facts">
            <div>
              <span>Role</span>
              <strong>{siteConfig.title}</strong>
            </div>
            {siteConfig.location ? (
              <div>
                <span>Location</span>
                <strong>{siteConfig.location}</strong>
              </div>
            ) : null}
            <div>
              <span>Focus</span>
              <strong>{profile.focus}</strong>
            </div>
          </div>
        </div>

        <ResumeSection />
      </Container>
    </section>
  );
}
