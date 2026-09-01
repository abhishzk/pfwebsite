# abhishzk.com

Product Manager portfolio for Abhishek Kumar, built with SvelteKit, TypeScript, Tailwind CSS, and Netlify.

## Portfolio structure

- Homepage focused on product outcomes, operating approach, experience, and contact
- VisaJobs Ireland case study at `/work/visajobs`
- Bill Reader case study at `/work/bill-reader`
- Watt Footprint platform case study at `/work/platform-delivery`
- Privacy-first Plausible tracking through the official frontend package
- System-aware light and dark themes

## Development

Install dependencies and start the local server:

```bash
npm install
npm run dev
```

## Validation

```bash
npm run check
npm run lint
npm run build
```

## Content maintenance

Shared portfolio content and changing product figures live in `src/lib/data/portfolio.ts`.

VisaJobs figures include a verification date and source note. Update those values in one place when public product numbers change.

The public resume is generated from `scripts/build-resume.py` and published at
`/abhishek-kumar-resume.pdf`. The script requires ReportLab.

## Deployment

Netlify builds the site with `npm run build` using the dedicated Netlify adapter. Legacy
case-study URLs redirect through both SvelteKit server handling and the root `_redirects` file.

Publish the linked production site with Netlify CLI 27.4.2 or newer.
