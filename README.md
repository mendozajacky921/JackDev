# Pixel Portfolio — Retro Arcade Theme

A single-page React portfolio styled like a retro arcade game, in black and yellow.

## Setup

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually http://localhost:5173).

To build for production:

```bash
npm run build
```

The output goes to `dist/`, ready to deploy anywhere static (Vercel, Netlify, GitHub Pages, etc).

## Structure

```
src/
  App.jsx              -> assembles all sections
  index.css            -> all styling (colors, fonts, layout)
  components/
    Nav.jsx             -> fixed top nav, scrolls to sections
    Hero.jsx             -> "PRESS START" intro screen
    About.jsx           -> character profile / bio
    Skills.jsx          -> XP-bar style skill list
    Projects.jsx        -> "level select" project grid
    Contact.jsx         -> "continue?" contact form
```

## Customizing

- **Your name / bio**: edit `Hero.jsx` and `About.jsx`.
- **Skills**: edit the `skills` array in `Skills.jsx` (name + percentage).
- **Projects**: edit the `levels` array in `Projects.jsx` (name, description, tech stack, link).
- **Contact links**: edit the links in `Contact.jsx`.
- **Colors**: all colors are CSS variables at the top of `index.css` (`--yellow`, `--amber`, `--black`, etc) — change those to retheme everything at once.
- **Fonts**: "Press Start 2P" (headings/pixel font) and "VT323" (body text) are loaded from Google Fonts in `index.html`.

## Notes

- The contact form currently just shows a "message sent" confirmation in the UI — it doesn't send anything yet. Wire it up to a service like Formspree, EmailJS, or your own backend when you're ready.
- All project/bio content is placeholder — swap in your real info.
