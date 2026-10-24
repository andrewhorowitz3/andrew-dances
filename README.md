# Ballroom Dance Journal

A black-and-white, photo-forward personal website template for documenting an adult ballroom dance journey: milestones, dances and progress, events and performances, a gallery, and goals.

> **Demo only.** This is a demo. The name, milestones, events, levels, and photos are fictional placeholders. All images are AI-generated and do not show real people.

Built with [v0](https://v0.app) by [andrewhorowitz3](https://github.com/andrewhorowitz3).

Repository: [github.com/andrewhorowitz3/demopromptwebsite](https://github.com/andrewhorowitz3/demopromptwebsite)

## Pages

| Route      | What it shows                                                        |
| ---------- | -------------------------------------------------------------------- |
| `/`        | Hero photo, tagline, recent milestones, and what is next             |
| `/journey` | A dated timeline of lessons, parties, new dances, check-outs, shows  |
| `/dances`  | Smooth, Rhythm, and Social dances with level and current focus       |
| `/events`  | Upcoming and past events (sorted automatically by date) with recaps  |
| `/gallery` | Filterable photo and video grid with a lightbox                      |
| `/goals`   | Next check-out, showcase routine, and competition with checklists    |

## Tech stack

- [Next.js 16](https://nextjs.org) (App Router)
- [Tailwind CSS v4](https://tailwindcss.com)
- TypeScript
- Playfair Display (serif headings) and Inter (body) through `next/font`

## Getting started

```bash
git clone https://github.com/andrewhorowitz3/demopromptwebsite.git
cd demopromptwebsite
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Making it your own

All content lives in **`lib/content.ts`**, so you can update the site without changing any components.

- **Name and tagline:** edit `profile`.
- **New milestone:** add an object to `milestones`.
- **New event:** add an object to `events`. Whether it shows as past or upcoming is based on its date.
- **New photo or video:** put the file in `public/images` (or `public/videos`) and add an entry to `gallery`.
- **Dance progress:** edit the dance's entry in `danceGroups`.
- **Goals:** edit `goals`, and mark checklist items with `done: true`.
- **Demo banner:** set `demoNotice.enabled` to `false` once you replace the sample content with your own.

Dates use the `YYYY-MM-DD` format.

## Theme

Colors are defined as design tokens in `app/globals.css`. The site is mostly black and white, and a single `--brand` accent color is used sparingly for highlights. Change it there to update the accent everywhere.

## Deploying

You can deploy with [Vercel](https://vercel.com/new) by importing this repository. You don't need any environment variables.

## License

[MIT](./LICENSE)
