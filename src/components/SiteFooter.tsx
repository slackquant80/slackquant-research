import { site } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="footer">
      <div className="shell footer-inner">
        <div>
          <strong>{site.name}</strong>
          <span className="footer-sep">·</span>
          Research by {site.researcher.displayName}
        </div>
        <div className="footer-meta">Public research & systems platform</div>
      </div>
    </footer>
  );
}
