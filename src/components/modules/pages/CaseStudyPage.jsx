import { useCallback, useState } from "react";
import { Container } from "../../shared/Container.jsx";
import { CaseStudyArchitecture } from "../case-study/CaseStudyArchitecture.jsx";
import { CaseStudyAside } from "../case-study/CaseStudyAside.jsx";
import { CaseStudyChallenge } from "../case-study/CaseStudyChallenge.jsx";
import { CaseStudyCta } from "../case-study/CaseStudyCta.jsx";
import { CaseStudyEngineering } from "../case-study/CaseStudyEngineering.jsx";
import { CaseStudyEvolution } from "../case-study/CaseStudyEvolution.jsx";
import { CaseStudyHero } from "../case-study/CaseStudyHero.jsx";
import { CaseStudyLightbox } from "../case-study/CaseStudyLightbox.jsx";
import { CaseStudyOutcomes } from "../case-study/CaseStudyOutcomes.jsx";
import { CaseStudyStats } from "../case-study/CaseStudyStats.jsx";
import { useDocumentTitle } from "../../../hooks/useDocumentTitle.js";
import { spiegelmaxCaseStudy } from "../../../utils/caseStudy.jsx";
import { seo } from "../../../utils/constant.jsx";

export function CaseStudyPage() {
  const study = spiegelmaxCaseStudy;
  const [activeStage, setActiveStage] = useState(null);

  useDocumentTitle(seo.caseStudy.title, seo.caseStudy.description);

  const closeLightbox = useCallback(() => setActiveStage(null), []);

  return (
    <>
      <div id="top">
        <CaseStudyHero study={study} />
        <CaseStudyStats stats={study.stats} />

        <section className="section case-article-section">
          <Container className="case-layout">
            <article className="case-article">
              <CaseStudyChallenge challenge={study.challenge} />
              <CaseStudyEvolution
                evolution={study.evolution}
                onOpenStage={setActiveStage}
              />
              <CaseStudyEngineering engineering={study.engineering} />
              <CaseStudyArchitecture architecture={study.architecture} />
              <CaseStudyOutcomes outcomes={study.outcomes} />
            </article>

            <CaseStudyAside
              factNote={study.factNote}
              facts={study.facts}
              toc={study.toc}
            />
          </Container>
        </section>

        <CaseStudyCta cta={study.cta} />
      </div>

      <CaseStudyLightbox stage={activeStage} onClose={closeLightbox} />
    </>
  );
}
