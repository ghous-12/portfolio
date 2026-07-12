export function Container({ as: Component = "div", children, className = "" }) {
  return <Component className={`container ${className}`.trim()}>{children}</Component>;
}
