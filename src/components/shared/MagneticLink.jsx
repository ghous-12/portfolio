import { Link } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";

export function MagneticLink({
  children,
  className = "",
  external = false,
  href,
  to,
}) {
  const content = (
    <>
      <span>{children}</span>
      <FiArrowUpRight aria-hidden="true" />
    </>
  );

  if (to) {
    return (
      <Link className={`magnetic-link ${className}`.trim()} to={to}>
        {content}
      </Link>
    );
  }

  return (
    <a
      className={`magnetic-link ${className}`.trim()}
      href={href}
      rel={external ? "noopener noreferrer" : undefined}
      target={external ? "_blank" : undefined}
    >
      {content}
    </a>
  );
}
