import Link from "next/link";

export default function NotFound() {
  return (
    <main>
      <section className="index-hero">
        <div className="shell">
          <div className="eyebrow">Not found</div>
          <h1>This research page is not available.</h1>
          <p className="hero-copy">
            The requested public research artifact may not exist or may not yet
            be released.
          </p>
          <Link className="btn primary" href="/research/">
            Return to Research
          </Link>
        </div>
      </section>
    </main>
  );
}
