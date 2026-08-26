# SlackQuant Research Dashboard — Application

## Status

**Public application source — current**

This application implements the approved public research direction using:
- Next.js App Router
- React
- TypeScript
- static export
- plain CSS

## Current routes

```text
/
/research/
/research/adaa/
/research/protection-patience/
/research/price-macro-decision/
/research/beyond-average-accuracy/
/systems/
/systems/scenario-stress-lab/
/about/
```

## Important boundaries

- GitHub remains the public code destination.
- This app does not implement a second code portal.
- Public system surfaces may document operational products, but live/operator runtimes remain separate unless a public-safe runtime is explicitly released.
- No placeholder public link is rendered as a real artifact.
- No database / CMS / authentication / API layer is included.

## Development

See:

`SETUP_AND_RUN_WINDOWS.md`

## Build output

`npm run build`

creates a static export in:

`out/`

That folder is a deployment artifact and should not be treated as canonical source.
