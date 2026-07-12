import { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

export function ProjectMediaCarousel({ media = [], title }) {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!media.length) {
    return null;
  }

  const activeMedia = media[activeIndex];
  const goToPrevious = () =>
    setActiveIndex((current) => (current - 1 + media.length) % media.length);
  const goToNext = () =>
    setActiveIndex((current) => (current + 1) % media.length);

  const handleKeyDown = (event) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      goToPrevious();
    }

    if (event.key === "ArrowRight") {
      event.preventDefault();
      goToNext();
    }
  };

  return (
    <section
      aria-label={`${title} media`}
      aria-roledescription="carousel"
      className="section media-carousel-section"
      tabIndex={0}
      onKeyDown={handleKeyDown}
    >
      <div className="container">
        <div className="media-carousel">
          <div className="media-carousel__viewport">
            {activeMedia.type === "video" ? (
              <video
                controls
                poster={activeMedia.poster || undefined}
                preload="metadata"
                src={activeMedia.src}
              >
                <track kind="captions" />
              </video>
            ) : (
              <img
                alt={activeMedia.alt || `${title} media ${activeIndex + 1}`}
                loading="lazy"
                src={activeMedia.src}
              />
            )}
          </div>

          {activeMedia.caption ? (
            <p className="media-carousel__caption">{activeMedia.caption}</p>
          ) : null}

          <div className="media-carousel__controls">
            <button
              aria-label="Previous media"
              type="button"
              onClick={goToPrevious}
            >
              <FiChevronLeft aria-hidden="true" />
            </button>
            <span>
              {activeIndex + 1} / {media.length}
            </span>
            <button aria-label="Next media" type="button" onClick={goToNext}>
              <FiChevronRight aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
