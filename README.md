# Open Fields

A map of public fields with real lacrosse goals, and whether they are playable
right now. Working title.

Built for a lacrosse coach in the Atlanta area as a coaching and pickup tool.

## Status

Phase 1: a static, clickable mockup. No backend, no accounts, no database.
Every field, status, condition, rating and comment in it is invented.

- `mockup/` the static prototype. See `mockup/README.md` for how to run it.

## Running the mockup

```bash
cd mockup
python3 -m http.server 8080
```

Then open http://localhost:8080

## Planned

Phase 2 is the real app: Next.js and TypeScript on Vercel, Supabase for
Postgres with PostGIS, Auth and Storage, MapLibre for the map.

Build standards for this project live in `~/Claude/Claude MD Files/WEBAPP_STANDARDS.md`.
