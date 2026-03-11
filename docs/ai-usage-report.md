# AI Usage Report – Assignment 2

## Overview

This report documents how AI tools were used during the development of Assignment 2 interactive portfolio enhancements. AI was used as a development assistant, with all generated code reviewed, understood, and adapted to fit the project's requirements.

---

## AI Tools Used

| Tool | Purpose | Usage Frequency |
|---|---|---|
| **Gemini (Antigravity)** | Code generation, architecture planning, documentation | Primary tool |

---

## Detailed Usage Log

### 1. Architecture & Planning

**Task**: Designing the interactive feature set for Assignment 2  
**AI Contribution**: Gemini helped analyze the existing Assignment 1 codebase (HTML, CSS, JS) and proposed specific features that would satisfy each rubric requirement:
- Project filter/search → Dynamic Content
- API quote fetcher → Data Handling
- Typing animation, toast notifications → Animations
- Loading/error/empty states → Error Handling

**My Review**: I reviewed the proposed plan, confirmed feature selection, and approved the approach before implementation began.

### 2. HTML Structure Updates

**Task**: Adding new interactive sections to `index.html`  
**AI Contribution**: Generated HTML for:
- Quote section with loading/error/content states
- Project filter bar with category buttons and search input
- `data-tags` attributes on project cards
- Empty state message for projects
- Toast notification container

**My Review**: Verified the HTML structure is semantic, accessible (uses proper labels, ARIA attributes where needed), and integrates cleanly with existing sections.

### 3. CSS Styles & Animations

**Task**: Styling new interactive components  
**AI Contribution**: Generated CSS for:
- Glassmorphic quote card with decorative quotation mark
- Loading spinner animation
- Filter pill buttons with gradient active state
- Search input with icon
- Toast notifications with slide-in/out animations
- Typing cursor blink animation
- Project card hide/show transitions
- Responsive breakpoints for all new elements

**My Review**: Confirmed styles match the existing design system (CSS custom properties, color palette, border-radius, etc). Verified responsive behavior at all breakpoints.

### 4. JavaScript Interactive Features

**Task**: Implementing dynamic behavior  
**AI Contribution**: Generated JavaScript for:
- **Typing effect**: Character-by-character animation with blinking cursor
- **Toast system**: `showToast()` utility with auto-dismiss and slide-out animation
- **Quote fetcher**: `async/await` fetch from DummyJSON API with loading, success, and error states
- **Project filter**: Combined tag-button + search-input filtering with empty state detection
- Updated form submission to use toast notifications

**My Review**: I read through each function to understand the logic:
- Typing effect uses `setTimeout` with randomized delay for natural feel
- Quote fetcher properly handles `try/catch` for network errors
- Project filter combines two filter dimensions (tag + text search) into a single `applyFilter()` function
- All functions follow the existing code patterns (modular functions, null checks, DOM ready handler)

### 5. Documentation

**Task**: Writing README.md, technical documentation  
**AI Contribution**: Generated comprehensive documentation reflecting the new features, project structure, and setup instructions.

**My Review**: Edited content for accuracy and clarity. Ensured all feature descriptions match the actual implementation.

---

## What I Learned

1. **Async/Await**: How to use `async/await` with `fetch()` to call external APIs, including proper error handling with `try/catch`
2. **State Management**: How to manage multiple UI states (loading → content → error) for API-driven components
3. **CSS Animations**: Using `@keyframes` with `animation` property for reusable transitions (slide-in, blink, fade)
4. **DOM Filtering**: How to combine multiple filter criteria (tag buttons + search text) and efficiently show/hide elements
5. **Toast Patterns**: How modern web apps use transient notifications with auto-dismiss behavior

---

## AI Usage Summary

| Aspect | Details |
|---|---|
| **Total features implemented** | 5 (typing, quotes, filter, toasts, form enhancement) |
| **Code understanding** | All generated code was read, understood, and verified |
| **Customization** | Styles adapted to match existing design system, logic adapted to existing patterns |
| **AI role** | Development assistant — supported learning, did not replace it |
