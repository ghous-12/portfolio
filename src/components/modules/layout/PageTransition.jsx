import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { gsap } from "../../../lib/gsap.js";
import { useReducedMotion } from "../../../hooks/useReducedMotion.js";

export function PageTransition({ children }) {
  const ref = useRef(null);
  const location = useLocation();
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion || !ref.current) {
      return undefined;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ref.current,
        { autoAlpha: 0, y: 16 },
        { autoAlpha: 1, duration: 0.55, ease: "power3.out", y: 0 },
      );
    }, ref);

    return () => ctx.revert();
  }, [location.pathname, reducedMotion]);

  return (
    <div ref={ref} className="page-transition">
      {children}
    </div>
  );
}
