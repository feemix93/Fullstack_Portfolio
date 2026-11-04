# Faheem Ur Rehman | Portfolio

Personal portfolio site for a full-stack developer, built with React and Vite. It showcases selected product work (CardClan, Blonk.co, GuestGuru.ai), work experience, and skills.

**Live site:** [your-site.vercel.app](https://your-site.vercel.app) <!-- replace after deploying -->

## Tech stack

- **React 18** for the UI
- **Vite 5** for development and builds
- **Plain CSS** with custom properties (no UI framework)
- **Vercel** for hosting

## Features

- Single-page layout with sections for projects, experience, skills, and contact
- Content-driven: all text lives in one data file, so updates need no component changes
- Responsive design, from phones to desktops
- Automatic light and dark mode based on the visitor's system setting
- Safe-area support for notched phones
- Accessible markup: semantic HTML, `rel="noopener noreferrer"` on external links

## Project structure

```
portfolio-react/
├── index.html          # HTML shell and meta tags
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx        # App entry point
    ├── App.jsx         # Components: Nav, Hero, Section, ProjectCard
    ├── data.js         # All site content (profile, projects, experience, skills)
    └── styles.css      # Styles and theme variables
```

## Getting started

**Prerequisites:** Node.js 18 or newer.

```bash
git clone git@github.com:feemix93/portfolio.git
cd portfolio
npm install
npm run dev
```

The site runs at `http://localhost:5173`.

### Scripts

| Command           | Description                                  |
| ----------------- | -------------------------------------------- |
| `npm run dev`     | Start the development server with hot reload |
| `npm run build`   | Create a production build in `dist/`         |
| `npm run preview` | Preview the production build locally         |

## Customizing the content

Everything is in `src/data.js`:

- `profile`: name, title, headline, intro, email, and social links
- `projects`: each has `name`, `role`, `description` (array of paragraphs), `tags`, and `url`
- `experience`: each has `role`, `when`, and `text`
- `skills`: groups of skill names

To add a project, add an object to the `projects` array:

```js
{
  name: "Project name",
  role: "Your role",
  description: ["What it does and what you built."],
  tags: ["React", "Node.js"],
  url: "https://example.com",
}
```

To change colors, edit the CSS variables at the top of `src/styles.css` (`--accent`, `--bg`, and so on). Dark-mode values are in the `prefers-color-scheme: dark` block.

## Deployment

The site is deployed on Vercel.

1. Push the repository to GitHub.
2. In Vercel, choose **Add New → Project** and import the repository.
3. Vercel detects Vite automatically (build command `npm run build`, output directory `dist`).
4. Click **Deploy**.

Every push to `main` triggers a new deployment.

## Design decisions

- **Data separated from components:** content changes are one-file edits, which keeps the UI code small and easy to review.
- **No UI library:** a portfolio this size does not need one. Plain CSS keeps the bundle small and loading fast.
- **Vite over Create React App:** faster startup and builds, and CRA is no longer actively maintained.
- **System fonts:** no external font requests, which keeps first load fast and avoids layout shift.

## Possible improvements

- Add side projects with live demos and GitHub links (for example, an audio transcription API and a tool-lending app with n8n automations)
- Add a downloadable resume
- Add a project detail view with architecture notes and screenshots
- Add basic tests and a CI check for builds

## Contact

- Email: [faheemuurehman@gmail.com](mailto:faheemuurehman@gmail.com)
- GitHub: [feemix93](https://github.com/feemix93)
- LinkedIn: [Faheem Ur Rehman](https://www.linkedin.com/in/faheem-ur-rehman-765ba592/)
