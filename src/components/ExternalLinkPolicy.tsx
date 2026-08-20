"use client";

import { useEffect } from "react";

const CANONICAL_HOST = "research.slackquant.com";

function enforceExternalLinkPolicy() {
  document.querySelectorAll<HTMLAnchorElement>("a[href]").forEach((anchor) => {
    const href = anchor.getAttribute("href");
    if (!href) return;

    let url: URL;
    try {
      url = new URL(href, window.location.href);
    } catch {
      return;
    }

    if (url.protocol !== "http:" && url.protocol !== "https:") return;

    const isInternal =
      url.origin === window.location.origin || url.hostname === CANONICAL_HOST;
    if (isInternal) return;

    anchor.target = "_blank";
    const rel = new Set(anchor.rel.split(/\s+/).filter(Boolean));
    rel.add("noopener");
    rel.add("noreferrer");
    anchor.rel = Array.from(rel).join(" ");
  });
}

export function ExternalLinkPolicy() {
  useEffect(() => {
    enforceExternalLinkPolicy();

    const observer = new MutationObserver(() => {
      enforceExternalLinkPolicy();
    });
    observer.observe(document.body, { childList: true, subtree: true });

    return () => observer.disconnect();
  }, []);

  return null;
}
