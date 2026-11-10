import { useEffect } from "react";
import { FiX } from "react-icons/fi";

export function CaseStudyLightbox({ stage, onClose }) {
  useEffect(() => {
    if (!stage) {
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [stage, onClose]);

  if (!stage) {
    return null;
  }

  return (
    <div
      aria-label="UI screenshot lightbox"
      aria-modal="true"
      className="case-lightbox"
      role="dialog"
      onClick={onClose}
    >
      <button
        aria-label="Close screenshot"
        className="case-lightbox__close"
        type="button"
        onClick={onClose}
      >
        <FiX aria-hidden="true" />
      </button>
      <img
        alt={stage.alt}
        className="case-lightbox__image"
        src={stage.image}
        onClick={(event) => event.stopPropagation()}
      />
    </div>
  );
}
