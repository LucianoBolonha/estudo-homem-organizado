# Infographic Typography Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rework the landing page into a compact infographic-style design inspired by the user's reference images.

**Architecture:** Keep the static HTML/CSS/JS structure. Replace the oversized modern landing layout with a presentation-like anatomy board, compact type scale, coral feature block, annotation labels, and discreet interactions.

**Tech Stack:** HTML5, CSS3, vanilla JavaScript, Vercel static hosting.

---

## File Structure

- `index.html`: replace section layout with infographic board, compact sections, method controls, and CTA.
- `assets/css/styles.css`: replace visual scale and layout with slide-like board, coral palette, smaller typography, and responsive rules.
- `assets/js/main.js`: keep interactions compatible with the new markup.

### Task 1: HTML Infographic Layout

**Files:**
- Modify: `index.html`

- [ ] **Step 1: Replace hero with anatomy board**

Create a first-view board with title, side labels, coral feature card, benefit row, proof strip, message reinforcement and CTA.

- [ ] **Step 2: Keep compact follow-up sections**

Add compact sections for method tabs, priorities, verse and final CTA.

- [ ] **Step 3: Preserve required data attributes**

Keep `data-reveal`, `data-method-tab`, `data-method-panel`, `data-priority-card`, `data-priority-title`, `data-priority-copy`, `data-priority-note`, and `data-year`.

### Task 2: CSS Infographic Visual System

**Files:**
- Modify: `assets/css/styles.css`

- [ ] **Step 1: Define compact typography**

Set body to 15px, hero h1 around 42px desktop, section h2 around 30px, and mobile-friendly clamps.

- [ ] **Step 2: Build slide-style board**

Style the first fold as a white board with light gray frame, coral center block, annotation labels, thin connector lines, small benefit dots, and compact CTA buttons.

- [ ] **Step 3: Style responsive behavior**

On mobile, stack labels above content, keep text readable, and avoid overlap.

### Task 3: JavaScript Compatibility

**Files:**
- Modify: `assets/js/main.js`

- [ ] **Step 1: Keep reveal and year rendering**

Maintain existing reveal and year behavior.

- [ ] **Step 2: Guard optional navigation**

Make active navigation code safe even if `data-section` nav links are reduced.

- [ ] **Step 3: Keep method and priority interactions**

Ensure tab and priority selectors still update visible content.

### Task 4: Verify Deploy Commit

**Files:**
- Commit all changed files after verification.

- [ ] **Step 1: Verify local server**

Confirm `/`, CSS and JS return HTTP `200`.

- [ ] **Step 2: Verify JS syntax**

Run `node --check assets/js/main.js`.

- [ ] **Step 3: Deploy to Vercel**

Run `npx -y vercel@53.2.0 deploy --prod --yes` and verify public URL returns `200`.

- [ ] **Step 4: Commit and push**

Commit with message `feat: refine landing typography with infographic layout` and push `origin master`.
