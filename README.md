# Syed Ghous Mohiuddin Portfolio

Production-style React portfolio built with Vite, React Router, GSAP, Tailwind CSS, and React Icons.

## Run Locally

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
```

Lint the project:

```bash
npm run lint
```

## Edit Portfolio Data

All portfolio content lives in:

```text
src/utils/constant.jsx
```

Update this file for profile text, navigation, experience, education, skills, projects, services, contact details, footer copy, SEO text, and Formspree settings.

## Resume File

The current downloadable resume is here:

```text
public/resume/Syed-Ghous-Mohiuddin-Resume.docx
```

The button path is configured in `siteConfig.resumeUrl` inside `src/utils/constant.jsx`.

To use a PDF instead, add it to `public/resume/` and update:

```js
resumeUrl: "/resume/Your-Resume.pdf";
```

## Project Media

Add project images or videos to `public/projects/` or another public folder, then reference them from each project object in `src/utils/constant.jsx`.

Example:

```js
media: [
  {
    type: "image",
    src: "/projects/mirror-configurator/screen-01.jpg",
    alt: "Mirror configurator product flow",
    caption: "Configurator product page",
  },
];
```

## Configure Formspree

Replace the placeholder endpoint in `formConfig`:

```js
export const formConfig = {
  endpoint: "https://formspree.io/f/REPLACE_WITH_FORM_ID",
};
```

Until that value is replaced, the contact form validates locally but will not submit.

## Add A Project

Add a new object to the `projects` array in `src/utils/constant.jsx`.

Use a stable URL slug for `id`, for example:

```js
id: "new-project-slug";
```

That project will be available at:

```text
/projects/new-project-slug
```

Leave unavailable URLs, media, dates, or result fields as empty strings or empty arrays. The UI hides missing fields automatically.

## Featured Projects

The homepage displays the first three projects where:

```js
featured: true;
```

Keep exactly three projects marked as featured for the intended homepage layout.
