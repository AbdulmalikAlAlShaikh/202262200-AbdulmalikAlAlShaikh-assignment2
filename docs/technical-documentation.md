# Technical Documentation – Assignment 2

## Architecture Overview

The portfolio website follows a simple three-layer architecture with no build tools or frameworks:

```
index.html  ──→  css/styles.css  (styling & animations)
     │
     └──→  js/script.js  (interactivity & data handling)
                │
                └──→  DummyJSON API  (external quote data)
```

All functionality is client-side. The site can be served as static files with no backend.

---

## File Structure

| File | Purpose | Size |
|---|---|---|
| `index.html` | Page structure, semantic HTML | ~400 lines |
| `css/styles.css` | Design system, themes, responsive layout, animations | ~1190 lines |
| `js/script.js` | All interactive behavior | ~450 lines |

---

## Design System

### CSS Custom Properties

All design tokens are defined as CSS custom properties in `:root`, enabling consistent styling and easy theme switching:

- **Colors**: `--color-bg`, `--color-text`, `--color-primary`, etc.
- **Spacing**: `--space-xs` through `--space-3xl` (0.5rem to 6rem)
- **Typography**: `--font-size-sm` through `--font-size-5xl`
- **Shadows**: `--shadow-sm`, `--shadow-md`, `--shadow-lg`, `--shadow-glow`
- **Transitions**: `--transition-fast` (150ms), `--transition-base` (250ms), `--transition-slow` (350ms)

### Theme System

Dark and light themes are implemented by overriding CSS custom properties on `[data-theme="light"]`. JavaScript reads/writes the `data-theme` attribute and persists it to `localStorage`.

---

## Feature Architecture

### 1. Typing Effect (`initTypingEffect`)

**How it works**:
1. On DOM load, the function targets `#typing-subtitle`
2. A cursor `<span>` is appended inside the element
3. Characters from the string "Software Engineering Student" are inserted one at a time before the cursor
4. Each character has a `setTimeout` with `70ms + random(0-50ms)` for a natural feel
5. The cursor continues blinking after typing is complete via CSS `@keyframes blink`

**Key decision**: The cursor is a real DOM element (not `::after`) so it can sit naturally in the text flow.

### 2. Toast Notification System (`showToast`)

**How it works**:
1. `showToast(message, type, duration)` creates a `<div class="toast {type}">` element
2. Appends it to `#toast-container` (fixed position, top-right)
3. CSS `@keyframes toastSlideIn` animates entry (translateX: 100% → 0)
4. After `duration` ms, adds `.removing` class which triggers `toastSlideOut` animation
5. On `animationend`, the element is removed from the DOM

**Types**: `success` (green), `error` (red), `info` (blue)

### 3. Quote Fetcher (`initQuoteFetch` / `fetchQuote`)

**API**: `https://dummyjson.com/quotes/random`  
**Method**: GET (no authentication required)  
**Response format**:
```json
{
  "id": 1,
  "quote": "Life isn't about getting and having...",
  "author": "Wayne Dyer"
}
```

**State management**:
- **Loading**: Shows `#quote-loading` (spinner + "Loading quote…"), hides content and error
- **Success**: Hides loading, shows `#quote-content` with quote text and author
- **Error**: Hides loading, shows `#quote-error` with friendly message, fires error toast

**Error handling**: Uses `try/catch` around `fetch()` and checks `response.ok`. Any network or HTTP error triggers the error state.

### 4. Project Filter & Search (`initProjectFilter`)

**Data model**: Each `.project-card` has a `data-tags` attribute (comma-separated lowercase tags, e.g., `"design,uiux,dev"`).

**Filter logic**:
1. Tag filter buttons set `activeFilter` variable
2. Search input provides `searchTerm`
3. `applyFilter()` iterates all project cards and checks:
   - `matchesTag`: card's `data-tags` includes `activeFilter` (or filter is "all")
   - `matchesSearch`: card's title, description, or tags include `searchTerm`
4. Cards that don't match get `.hidden` class (CSS: opacity 0, scale 0.9, position absolute)
5. If zero cards visible, `#projects-empty` is shown

**UX details**:
- Filter buttons use `.active` class with gradient background
- Search input expands on focus (220px → 260px)
- Card hide/show is animated via CSS transitions (0.4s ease)

### 5. Contact Form Validation (`initContactForm`)

**Validation rules**:
| Field | Rules |
|---|---|
| Name | Required, minimum 2 characters |
| Email | Required, valid email format (regex) |
| Message | Required, minimum 10 characters |

**Feedback mechanisms**:
- Inline error messages below each field (`<span class="form-error">`)
- Inline status message (`#form-status`) with success/error styling
- Toast notification for success and error states
- Real-time validation on field `blur` event

---

## Animations & Transitions

| Animation | Trigger | CSS Keyframe | Duration |
|---|---|---|---|
| Fade-in up | Scroll into view | `fadeInUp` | 0.6s |
| Typing cursor blink | On load (continuous) | `blink` | 0.7s |
| Loading spinner | Quote fetch start | `spin` | 0.8s |
| Toast slide in | `showToast()` call | `toastSlideIn` | 0.4s |
| Toast slide out | Auto-dismiss | `toastSlideOut` | 0.3s |
| Project card hide | Filter mismatch | CSS transition | 0.4s |
| Card hover lift | Mouse hover | CSS transition | 0.25s |
| Theme transition | Theme toggle | CSS transition | 0.25s |

---

## Responsive Design

Three breakpoints handle all device sizes:

| Breakpoint | Key changes |
|---|---|
| `≤ 968px` | Hero grid → single column, projects grid → single column |
| `≤ 768px` | Mobile nav menu, filter bar stacks vertically, full-width search, full-width toasts |
| `≤ 480px` | Reduced font sizes, reduced padding |

---

## Browser Compatibility

All features use widely supported APIs:
- `fetch()`: All modern browsers
- `IntersectionObserver`: All modern browsers
- `localStorage`: All browsers
- CSS custom properties: All modern browsers
- `async/await`: All modern browsers
- CSS `backdrop-filter`: Chrome, Safari, Edge, Firefox 103+

---

## Performance Considerations

- **No external dependencies**: No frameworks, no build step
- **CSS transitions over JS animations**: Used where possible for GPU acceleration
- **IntersectionObserver**: Efficient scroll-triggered animations
- **Lazy state management**: Quote section only fetches when the page loads, subsequent fetches are user-triggered
- **Minimal DOM manipulation**: Filter hide/show uses CSS classes rather than removing/adding elements
