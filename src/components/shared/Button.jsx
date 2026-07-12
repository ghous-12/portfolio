import { Link } from "react-router-dom";
import { FiArrowUpRight, FiDownload } from "react-icons/fi";

export function Button({
  children,
  className = "",
  download = false,
  external = false,
  href,
  icon = "arrow",
  to,
  variant = "primary",
  ...props
}) {
  const buttonClass = `button button--${variant} ${className}`.trim();
  const iconElement =
    icon === "download" ? (
      <FiDownload aria-hidden="true" />
    ) : icon === "none" ? null : (
      <FiArrowUpRight aria-hidden="true" />
    );

  const content = (
    <>
      <span>{children}</span>
      {iconElement}
    </>
  );

  if (to) {
    return (
      <Link className={buttonClass} to={to} {...props}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        className={buttonClass}
        download={download}
        href={href}
        rel={external ? "noopener noreferrer" : undefined}
        target={external ? "_blank" : undefined}
        {...props}
      >
        {content}
      </a>
    );
  }

  return (
    <button className={buttonClass} type="button" {...props}>
      {content}
    </button>
  );
}
