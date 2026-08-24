import type { ResearchItem } from "@/data/types";

type CitationBoxProps = {
  item: Pick<
    ResearchItem,
    "authorLine" | "title" | "subtitle" | "status" | "ssrnId" | "dateLabel"
  >;
};

function citationAuthor(authorLine: string) {
  const parts = authorLine.trim().split(/\s+/);
  if (parts.length < 2) return authorLine;

  const surname = parts[parts.length - 1];
  const initials = parts
    .slice(0, -1)
    .map((part) => part.charAt(0).toUpperCase())
    .filter(Boolean)
    .join(". ");

  return `${surname}, ${initials}.`;
}

export function CitationBox({ item }: CitationBoxProps) {
  const year = item.dateLabel.match(/\b(?:19|20)\d{2}\b/)?.[0] ?? item.dateLabel;
  const author = citationAuthor(item.authorLine);
  const title = item.subtitle ? `${item.title}: ${item.subtitle}` : item.title;
  const ssrn = item.ssrnId ? ` SSRN ${item.ssrnId}.` : "";
  const citation = `${author} (${year}). ${title}. ${item.status}.${ssrn}`;

  return <div className="citation-box">{citation}</div>;
}