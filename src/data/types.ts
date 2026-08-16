export type ResearchStream = "investment" | "academic";

export type PublicLinks = {
  paper?: string;
  ssrn?: string;
  github?: string;
  replication?: string;
  archivalRelease?: string;
  doi?: string;
  researchDashboard?: string;
  operationalDashboard?: string;
};

export type EvidenceFigure = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  alt: string;
  sourceLabel: string;
};

export type ResearchItem = {
  slug: string;
  title: string;
  subtitle?: string;
  stream: ResearchStream;
  streamLabel: string;
  status: string;
  publicVersion?: string;
  ssrnId?: string;
  dateLabel: string;
  authorLine: string;
  affiliation?: string;
  shortSummary: string;
  researchQuestion: string;
  findings: string[];
  tags: string[];
  selectedEvidence?: EvidenceFigure[];
  links: PublicLinks;
};
