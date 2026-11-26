type ArtifactLinkProps = {
  href?: string;
  children: React.ReactNode;
  primary?: boolean;
  external?: boolean;
  dashboardApp?: boolean;
  variant?: "default" | "inverse";
};

export function ArtifactLink({
  href,
  children,
  primary = false,
  external = false,
  dashboardApp = false,
  variant = "default",
}: ArtifactLinkProps) {
  if (!href) return null;

  const opensNewTab = external || dashboardApp || href.toLowerCase().endsWith(".pdf");

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
      target={opensNewTab ? "_blank" : undefined}
      rel={opensNewTab ? "noopener noreferrer" : undefined}
      data-sq-dashboard-app={dashboardApp ? "true" : undefined}
    >
      {children}
    </a>
  );
}
