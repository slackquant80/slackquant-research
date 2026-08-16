type ArtifactLinkProps = {
  href?: string;
  children: React.ReactNode;
  primary?: boolean;
  external?: boolean;
  variant?: "default" | "inverse";
};

export function ArtifactLink({
  href,
  children,
  primary = false,
  external = false,
  variant = "default",
}: ArtifactLinkProps) {
  if (!href) return null;

  const classes = [
    "btn",
    primary ? "primary" : "soft",
    external ? "ext" : "",
    variant === "inverse" ? "inverse" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <a
      className={classes}
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
    >
      {children}
    </a>
  );
}
