import { useEffect, useRef } from "react";
import { gsap } from "../../lib/gsap.js";
import { useReducedMotion } from "../../hooks/useReducedMotion.js";

export function RevealText({ as: Component = "div", children, className = "" }) {
  const ref = useRef(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion || !ref.current) {
      return undefined;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ref.current,
        { autoAlpha: 0, y: 24 },
        {
          autoAlpha: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ref.current,
            start: "top 82%",
          },
          y: 0,
        },
      );
    }, ref);

    return () => ctx.revert();
  }, [reducedMotion]);

  return (
    <Component ref={ref} className={`reveal-text ${className}`.trim()}>
      {children}
    </Component>
  );
}
