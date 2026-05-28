# Modern Clean Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Redesign the static landing page into a modern, clean, vibrant and interactive ministerial study page.

**Architecture:** Keep the static architecture with `index.html`, `assets/css/styles.css`, and `assets/js/main.js`. Replace the visual structure and add client-side interactions for method tabs, priority focus cards, scroll reveal, and active navigation.

**Tech Stack:** HTML5, CSS3, vanilla JavaScript, Vercel static hosting.

---

## File Structure

- `index.html`: replace page markup with a modern section layout and interactive controls.
- `assets/css/styles.css`: replace the dark/gold theme with a light vibrant design system and responsive layouts.
- `assets/js/main.js`: add state for method tabs, priority focus cards, active nav, and scroll reveal.
- `README.md`: no required content change unless deployment URL changes.

### Task 1: Replace HTML Structure

**Files:**
- Modify: `index.html`

- [ ] **Step 1: Update head fonts and metadata**

Use a modern sans-serif font stack through Google Fonts and preserve the page title/description.

- [ ] **Step 2: Rebuild the body sections**

Create header, hero, stats strip, learning cards, interactive method section, interactive priorities section, verse callout, CTA, and footer.

- [ ] **Step 3: Add data attributes**

Add `data-method-tab`, `data-method-panel`, `data-priority-card`, `data-priority-title`, `data-priority-copy`, `data-priority-note`, `data-nav-link`, and `data-reveal` where needed.

### Task 2: Replace CSS Design System

**Files:**
- Modify: `assets/css/styles.css`

- [ ] **Step 1: Define light vibrant tokens**

Define tokens for white canvas, blue ink, ciano, green, amber accent, text hierarchy, borders and shadows.

- [ ] **Step 2: Style modern layout**

Implement responsive header, hero, cards, stats, method tabs, priority panel, CTA and footer.

- [ ] **Step 3: Add interaction states**

Add hover, focus, active, selected and reveal states with smooth transitions.

### Task 3: Replace JavaScript Interactions

**Files:**
- Modify: `assets/js/main.js`

- [ ] **Step 1: Preserve scroll reveal and year rendering**

Keep `IntersectionObserver` reveal behavior and `[data-year]` population.

- [ ] **Step 2: Add method tabs**

Clicking a method tab sets `aria-selected`, activates the right panel, and updates styles.

- [ ] **Step 3: Add priority focus**

Clicking a priority card updates the focus panel content and selected state.

- [ ] **Step 4: Add active navigation**

Use `IntersectionObserver` to mark the current nav link while scrolling.

### Task 4: Verify And Deploy

**Files:**
- Modify only if verification reveals issues.

- [ ] **Step 1: Verify localhost**

Run a local static server and confirm `/`, CSS and JS return HTTP `200`.

- [ ] **Step 2: Verify behavior by markup**

Use `rg` to confirm all data attributes needed by JavaScript exist in `index.html`.

- [ ] **Step 3: Deploy to Vercel**

Run `npx -y vercel@53.2.0 deploy --prod --yes` and confirm the public URL returns HTTP `200`.

### Task 5: Commit And Push

**Files:**
- Commit changed files after verification.

- [ ] **Step 1: Check git status**

Run `git status --short` and review changed files.

- [ ] **Step 2: Commit**

Commit with message `feat: redesign landing page with modern interactive style`.

- [ ] **Step 3: Push**

Push to `origin master`.
