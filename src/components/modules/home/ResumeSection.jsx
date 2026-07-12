import { FiAward } from "react-icons/fi";
import { Button } from "../../shared/Button.jsx";
import {
  certifications,
  profile,
  siteConfig,
} from "../../../utils/constant.jsx";

export function ResumeSection() {
  return (
    <div className="resume-panel">
      <div>
        <p className="eyebrow">Selected strengths</p>
        <ul className="strength-list">
          {profile.strengths.map((strength) => (
            <li key={strength}>{strength}</li>
          ))}
        </ul>
      </div>

      <div className="resume-panel__aside">
        {siteConfig.resumeUrl ? (
          <Button
            download
            href={siteConfig.resumeUrl}
            icon="download"
            variant="secondary"
          >
            {siteConfig.resumeLabel}
          </Button>
        ) : null}

        {certifications.length ? (
          <div className="certifications">
            <p>
              <FiAward aria-hidden="true" />
              Certifications ongoing
            </p>
            <ul>
              {certifications.map((certification) => (
                <li key={certification}>{certification}</li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    </div>
  );
}
