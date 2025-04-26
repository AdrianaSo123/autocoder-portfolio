# Style Guide Cheat Sheet

A quick reference for your portfolio and project styling, based on your `/docs` system.

---

## Brand Colors
```css
:root {
  --color-brand-primary: #7F4DE2;
  --color-brand-accent: #FFB43A;
  --color-brand-bg: #faf5ff;
  --color-brand-bg-alt: #e0f2fe;
  --color-success: #22c55e;
  --color-error: #ef4444;
  --color-warning: #f59e0b;
  --color-grey-100: #f8fafc;
  --color-grey-200: #e9d5ff;
}
```

## Typography
- **Headings:** `IBM Plex Mono`, monospace; bold, -0.02em letter-spacing
- **Body:** `Inter`, sans-serif; 1.1rem+, 1.7 line-height

## Spacing
- Section/card padding: `2.2rem 2.2rem`
- Section margin: `2.1rem auto`
- Max width: `900px`

## Card/Section Example
```css
.card, .section-context {
  background: linear-gradient(120deg, #f8fafc 0%, #faf5ff 100%);
  border: 1.5px solid #e9d5ff;
  border-radius: 1.3rem;
  box-shadow: 0 2px 16px 0 rgba(124, 86, 255, 0.08);
  margin: 2.1rem auto;
  padding: 2.2rem 2.2rem;
  max-width: 900px;
  width: 100%;
}
```

## Button Example
```css
.button {
  background: linear-gradient(90deg, #7F4DE2 0%, #6C63FF 100%);
  color: #fff;
  border: none;
  border-radius: 999px;
  padding: 0.7rem 2.2rem;
  font-family: 'IBM Plex Mono', monospace;
  font-weight: 700;
  font-size: 1.1rem;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(124, 86, 255, 0.13);
  transition: background 0.2s, box-shadow 0.2s;
}
.button:hover {
  background: linear-gradient(90deg, #B993FF 0%, #7F4DE2 100%);
}
```

## Usage
- Use these variables and classes in all projects for instant brand consistency.
- Reference `/docs/02-typography.md`, `/docs/03-color-system.md`, `/docs/04-spacing-layout.md` for full details.
