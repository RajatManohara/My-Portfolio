# Rajat Manohara - Professional Portfolio

A modern, responsive, and performance-optimized personal developer portfolio website engineered with pure **HTML5**, **CSS3**, and **Vanilla JavaScript**.

Focused on communicating Rajat Manohara's expertise in **Java Backend Development**, **Spring Boot**, **REST APIs**, and **Relational Database Systems**.

---

## 🚀 Key Features

- **Engineered Visual Identity**:
  - Dark charcoal and obsidian palette with subtle ambient purple and cyan accents.
  - Interactive backend code terminal hero previewing Java / Spring Boot application architecture.
  - Minimal glassmorphism and glow borders.
- **Section Architecture (9 Complete Sections)**:
  1. **Sticky Header / Navigation**: Desktop nav & responsive mobile slide menu with smooth scrolling, accessible ARIA attributes, and active section scroll tracking.
  2. **Hero Section**: Strong headline (*"Building Reliable Backend Systems with Java"*), dynamic typing title animation, resume CTA, and social links.
  3. **About Me**: Narrative and three core engineering pillars (Backend Architecture, Database Engineering, and Software Craftsmanship).
  4. **Technical Skills**: Structured categories (Programming, Backend Development, Databases, Frontend, Developer Tools) with zero fake percentages.
  5. **Featured Projects**:
     - *BIS360 – AI Standards & Compliance Copilot*
     - *Smart Deal Finder & Price Tracker*
     - Clear, honest capability breakdown distinguishing **Implemented**, **In-Progress**, and **Planned** features.
  6. **Experience & Education**: Clean timeline showcasing academic credentials and practical backend development projects with clearly designated editable placeholders.
  7. **Achievements & Certifications**: Grounded, verifiable technical milestones (Core Java Mastery, Relational Database Design, RESTful API Design) and verified credential slots.
  8. **Contact Section**: Detailed contact cards with copy-to-clipboard functionality and an accessible form with client-side validation, RFC-compliant email checking, and honest `mailto:` handling (no fake server submissions).
  9. **Footer**: Dynamic copyright year, quick site directory, and social links.
- **Accessibility & UX**:
  - Semantic HTML5 elements and WCAG-compliant color contrast.
  - Skip-to-content navigation for assistive tech.
  - Fully keyboard navigatable with visible `:focus-visible` outlines.
  - Respects `@media (prefers-reduced-motion: reduce)`.
  - Zero horizontal overflow across all screen widths (320px to 4K).

---

## 🛠️ Technology Stack

- **HTML5**: Semantic document markup and accessible ARIA attributes.
- **CSS3**: Modern CSS variables, Grid, Flexbox, responsive typography, and media queries.
- **Vanilla JavaScript (ES6+)**: Pure DOM manipulation, Intersection Observer API, and input validation with strictly zero frameworks.
- **Lucide Icons**: SVG icon library via CDN.
- **Google Fonts**: Inter & JetBrains Mono.

---

## 📁 Directory Structure

```text
portfolio/
├── index.html          # Main HTML document with 9 structured sections
├── css/
│   └── style.css       # Core stylesheet (Design system, responsive breakpoints, dark theme)
├── js/
│   └── script.js       # Vanilla JS (Typing effect, scroll tracking, form validation, copy utilities)
└── README.md           # Documentation & customization guide
```

---

## ✏️ Quick Customization Guide

1. **Email & Contact Details**:
   - In `index.html`, update `rajat.manohara@placeholder.com` to your active email address.
   - In `js/script.js`, verify `targetEmail = "rajat.manohara@placeholder.com"` matches your address.
2. **Social Profiles**:
   - In `index.html` (Hero & Footer sections), replace `https://github.com/placeholder` with your actual GitHub username.
   - Verify your LinkedIn URL `https://linkedin.com/in/rajatmanohara`.
3. **University / Education**:
   - In `index.html` within the `#experience` section, replace `[Your University / College Name]` with your actual degree institution.
4. **Verified Certifications**:
   - In the `#achievements` section, add links or credential IDs to the editable certification card once verified.

---

## 💻 How to Run & Test Locally

No build tools, bundlers, or servers are required.

1. Double-click `index.html` to open directly in any modern browser (Google Chrome, Mozilla Firefox, Microsoft Edge, Safari).
2. Alternatively, serve via Python's built-in HTTP server:
   ```bash
   python -m http.server 8000
   ```
   Then navigate to `http://localhost:8000` in your web browser.

---

## 📄 License
Created for Rajat Manohara. All rights reserved.
