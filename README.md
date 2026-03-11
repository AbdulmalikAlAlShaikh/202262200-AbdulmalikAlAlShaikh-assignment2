# Personal Portfolio Website – Assignment 2

A modern, responsive personal portfolio website with interactive features, built with HTML, CSS, and JavaScript. Enhanced from Assignment 1 with dynamic content, API integration, and smooth animations.

![Portfolio Preview](assets/images/profile.png)

## 🌟 Features

### Core Features (Assignment 1)
- **Responsive Design**: Fully responsive across desktop, tablet, and mobile devices
- **Dark/Light Theme**: Toggle between themes with localStorage persistence
- **Form Validation**: Real-time contact form validation with error messages
- **Smooth Scrolling**: Navigation links smoothly scroll to sections
- **Mobile Menu**: Responsive hamburger navigation

### New Interactive Features (Assignment 2)
- **🔍 Project Filter & Search**: Filter projects by category (All, Design, Development, UI/UX) and search by keyword with live filtering
- **💬 Daily Inspiration Quotes**: Random quotes from a public API with loading spinner, error handling, and "New Quote" button
- **⌨️ Typing Animation**: Hero subtitle types out with a blinking cursor effect
- **🔔 Toast Notifications**: Animated slide-in notifications for form submissions and API errors
- **📭 Empty States**: Friendly messages when project filters return no results
- **⏳ Loading Indicators**: Visual feedback while fetching data from APIs

## 🚀 Quick Start

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- No build tools or dependencies required!

### Running Locally

1. **Clone this repository**
   ```bash
   git clone https://github.com/yourusername/id-name-assignment2.git
   cd id-name-assignment2
   ```

2. **Open in browser**
   - Simply open `index.html` in your web browser
   - Or use a local development server:
     ```bash
     # Using Python 3
     python3 -m http.server 8000

     # Using Node.js
     npx http-server
     ```
   - Then navigate to `http://localhost:8000`

3. **Explore the features**
   - Try the theme toggle in the navigation bar
   - Watch the typing animation in the hero section
   - Scroll to the "Daily Inspiration" section for random quotes
   - Use the filter buttons and search bar to filter projects
   - Test the contact form validation (try submitting empty fields)

## 📁 Project Structure

```
assignment-2/
├── index.html              # Main HTML file
├── css/
│   └── styles.css         # All styles, themes, and animations
├── js/
│   └── script.js          # Interactive functionality
├── assets/
│   └── images/            # Profile and project images
├── docs/
│   ├── ai-usage-report.md         # AI tools documentation
│   └── technical-documentation.md # Technical details
├── .gitignore             # Git ignore rules
└── README.md              # This file
```

## 🎨 Technologies Used

- **HTML5**: Semantic markup and accessibility
- **CSS3**: Custom properties, Grid, Flexbox, animations, glassmorphism
- **JavaScript (ES6+)**: Async/await, Fetch API, DOM manipulation, localStorage
- **Google Fonts**: Inter font family
- **Public API**: [DummyJSON Quotes](https://dummyjson.com/docs/quotes) for random quotes

## ✨ Interactive Features Explained

### 1. Project Filter & Search (Dynamic Content)
Users can filter projects by category using pill-shaped buttons (All, Design, Development, UI/UX) and search by keyword. Projects smoothly hide/show with fade and scale transitions. An empty state message appears when no results match.

### 2. Quote API Integration (Data Handling)
The "Daily Inspiration" section fetches random quotes from the DummyJSON API. It includes:
- A loading spinner while fetching
- A friendly error message if the request fails
- A "New Quote" button to fetch another quote
- Toast notification on API failure

### 3. Typing Animation (Animation)
The hero subtitle ("Software Engineering Student") types out character by character with a blinking cursor, creating an engaging first impression.

### 4. Toast Notification System (User Feedback)
Animated toast notifications slide in from the right for:
- Successful form submissions (green)
- Form validation errors (red)
- API fetch failures (red)

### 5. Theme Persistence (Data Handling)
Dark/light theme preference is saved in localStorage and restored on page load. Falls back to system preference on first visit.

## 🤖 AI Integration

This project was developed with assistance from AI tools. Key uses included:
- **Code Generation**: Gemini/Antigravity for interactive feature implementation
- **Architecture Design**: AI-assisted planning of feature architecture
- **Documentation**: AI assistance for comprehensive documentation

For detailed information, see [docs/ai-usage-report.md](docs/ai-usage-report.md).

## 🔧 Browser Compatibility

Tested and working on:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📱 Responsive Breakpoints

| Breakpoint | Target |
|---|---|
| < 480px | Mobile phones |
| 481px – 768px | Tablets |
| 769px – 968px | Small desktops |
| > 968px | Large desktops |

## 📚 Documentation

- **[AI Usage Report](docs/ai-usage-report.md)**: Detailed documentation of AI tool usage
- **[Technical Documentation](docs/technical-documentation.md)**: Architecture and implementation details

## 🎯 Assignment 2 Requirements Checklist

- ✅ **Dynamic Content**: Project filter/search with tag-based filtering and live search
- ✅ **Data Handling**: localStorage for theme + public API for quotes
- ✅ **Animations**: Typing effect, toast slide-in, project filter transitions, scroll fade-in
- ✅ **Error Handling**: Loading indicator, API error messages, empty states, form validation
- ✅ **AI Enhancement**: Documented in ai-usage-report.md
- ✅ **Documentation**: README, technical docs, AI report

## 👨‍💻 Author

**Abdulmalik Al AlShaikh**  
Software Engineering Student

## 📄 License

This project is open source and available for educational purposes.

---

**Note**: This is an educational project created for SWE363 – Web Engineering, demonstrating interactive web development with JavaScript.
