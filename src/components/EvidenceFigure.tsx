import type { EvidenceFigure as EvidenceFigureData } from "@/data/types";

export function EvidenceFigure({
  figure,
}: {
  figure: EvidenceFigureData;
}) {
  return (
    <figure className="evidence-figure">
      <a
        className="evidence-image-link"
        href={figure.imageUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Open full-size figure: ${figure.title}`}
      >
        <img
          src={figure.imageUrl}
          alt={figure.alt}
          loading="lazy"
          decoding="async"
        />
      </a>
      <figcaption className="evidence-figure-copy">
        <div className="evidence-source">{figure.sourceLabel}</div>
        <h3>{figure.title}</h3>
        <p>{figure.description}</p>
        <a
          className="evidence-full-link"
          href={figure.imageUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          Open full-size figure ↗
        </a>
      </figcaption>
    </figure>
  );
}
