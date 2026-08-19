import Link from "next/link";
import { site } from "@/data/site";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="shell nav">
        <Link className="brand" href="/">
          {site.name}
        </Link>
        <nav className="nav-links" aria-label="Primary">
          <Link href="/research/">Research</Link>
          <Link href="/methods/">Methods</Link>
          <Link href="/about/">About</Link>
          <a className="ext" href={site.github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </nav>
      </div>
    </header>
  );
}
