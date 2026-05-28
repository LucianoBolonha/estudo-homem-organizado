# Landing Page Estudo Homens Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a static, responsive public landing page for the Pastor Fernando study "Como Ser Um Homem Organizado".

**Architecture:** Use a simple static site with one HTML page, one CSS file, one JS file, and a README. Keep the page deployable to static hosts such as Vercel or Netlify and runnable locally through any static server.

**Tech Stack:** HTML5, CSS3, vanilla JavaScript, static hosting.

---

## File Structure

- `index.html`: complete page markup and section content.
- `assets/css/styles.css`: visual system, responsive layout, buttons, cards, section styling, and animation states.
- `assets/js/main.js`: mobile-safe scroll reveal and current year rendering.
- `README.md`: local run and public deploy instructions.

### Task 1: Create Static Page Markup

**Files:**
- Create: `index.html`

- [ ] **Step 1: Add semantic HTML**

Create the page with a fixed header, hero, verse section, content cards, method section, priority section, final CTA, and footer.

- [ ] **Step 2: Verify links**

Open `index.html` and confirm section links point to existing anchors: `#conteudo`, `#metodo`, `#prioridades`, and `#acessar`.

### Task 2: Add Visual System

**Files:**
- Create: `assets/css/styles.css`

- [ ] **Step 1: Define CSS tokens**

Add tokens for dark backgrounds, text hierarchy, gold emphasis, borders, spacing, and radius.

- [ ] **Step 2: Style responsive sections**

Implement desktop and mobile layouts for hero, cards, steps, CTA, and footer.

- [ ] **Step 3: Check mobile fit**

Run the site locally and confirm text and buttons fit at 390px width and desktop width.

### Task 3: Add Lightweight JavaScript

**Files:**
- Create: `assets/js/main.js`

- [ ] **Step 1: Add scroll reveal**

Use `IntersectionObserver` to reveal elements with the `data-reveal` attribute.

- [ ] **Step 2: Add year rendering**

Populate any `[data-year]` element with the current year.

### Task 4: Add Project Instructions

**Files:**
- Create: `README.md`

- [ ] **Step 1: Document local run**

Include commands for running with Python or a static server.

- [ ] **Step 2: Document deploy path**

Include concise guidance for publishing through Vercel or Netlify.

### Task 5: Verify

**Files:**
- Modify only if verification reveals issues.

- [ ] **Step 1: Start a local server**

Run a static server in the project directory.

- [ ] **Step 2: Open localhost**

Open the local URL and inspect desktop and mobile layouts.

- [ ] **Step 3: Fix visual issues**

Adjust CSS if any text overlaps, content is cramped, or CTA is unclear.
