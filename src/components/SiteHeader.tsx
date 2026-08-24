import Link from "next/link";
import { site } from "@/data/site";
import { methodsRootHref } from "@/lib/methodsHref";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="shell nav">
        <Link className="brand" href="/">
          {site.name}
        </Link>
        <nav className="nav-links" aria-label="Primary">
          <Link href="/research/">Research</Link>
          <a href={methodsRootHref}>Methods</a>
          <Link href="/about/">About</Link>
          <a className="ext" href={site.github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </nav>
      </div>
    </header>
  );
}

