import Link from "next/link";

export default function NotFound() {
  return (
    <main>
      <section className="index-hero">
        <div className="shell">
          <div className="eyebrow">Not found</div>
          <h1>This page is not available.</h1>
          <p className="hero-copy">
            The requested resource may have moved, may not exist, or may not yet
            be publicly available.
          </p>
          <Link className="btn primary" href="/">
            Return Home
          </Link>
        </div>
      </section>
    </main>
  );
}
