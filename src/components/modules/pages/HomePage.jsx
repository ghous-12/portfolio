import { About } from "../home/About.jsx";
import { Contact } from "../home/Contact.jsx";
import { Education } from "../home/Education.jsx";
import { Experience } from "../home/Experience.jsx";
import { FeaturedProjects } from "../home/FeaturedProjects.jsx";
import { Hero } from "../home/Hero.jsx";
import { Services } from "../home/Services.jsx";
import { SkillsTabs } from "../home/SkillsTabs.jsx";
import { useDocumentTitle } from "../../../hooks/useDocumentTitle.js";
import { seo } from "../../../utils/constant.jsx";

export function HomePage() {
  useDocumentTitle(seo.home.title, seo.home.description);

  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Education />
      <SkillsTabs />
      <FeaturedProjects />
      <Services />
      <Contact />
    </>
  );
}
