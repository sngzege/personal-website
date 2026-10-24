# egesengoz.com

Personal site of Ege Şengöz. Static HTML + Tailwind, deployed on Vercel.

## Develop

```bash
npm install
npm run dev        # Tailwind watch + http://127.0.0.1:5173
npm run build:css  # one-off CSS build (commit css/main.css)
```

## Structure

```
index.html            redirect to pages/home.html
pages/                one HTML file per page (EN/TR strings live at the bottom of each)
js/portfolio.js       language switching, shared header/footer, project cards, mail forms
data/projects.js      projects (metric, domain, glyph, featured, order)
data/services.js      services on the Solutions page
data/credentials.js   ISO lead-auditor list and other certifications
data/blog.js          notes
data/resources.js     templates (set status "ready" and a file path to enable download)
css/tailwind.css      design tokens and components -> compiled to css/main.css
```

Pages use `<body class="site" data-page="...">` with empty `<header data-site-header>` and
`<footer data-site-footer>` elements; `portfolio.js` fills them.

Employer names are kept generic on the public site; change `org_*` strings in
`js/portfolio.js` to show real names. Contact forms open the visitor's email app
(`CONTACT_EMAIL` in `js/portfolio.js`).

## Workflow

Work happens on `dev`; merge to `main` to publish.
