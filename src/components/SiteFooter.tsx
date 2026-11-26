import Link from "next/link";
import { site } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="footer">
      <div className="shell footer-inner">
        <div>
          <strong>{site.name}</strong>
          <span className="footer-sep">·</span>
          Research by{" "}
          <Link href="/about/">{site.researcher.displayName}</Link>
          <span className="footer-sep">·</span>
          <a href={`mailto:${site.researcher.email}`}>Contact</a>
          <span className="footer-sep">·</span>
          <a
            className="ext"
            href={site.researcher.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
        <div className="footer-meta">Research, computational methods &amp; investment systems</div>
      </div>
    </footer>
  );
}
