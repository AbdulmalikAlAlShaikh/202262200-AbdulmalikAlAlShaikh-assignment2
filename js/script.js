// ===================================
// THEME TOGGLE
// ===================================

/**
 * Initialize theme from localStorage or system preference
 */
function initTheme() {
  const savedTheme = localStorage.getItem("theme");
  const systemPrefersDark = window.matchMedia(
    "(prefers-color-scheme: dark)",
  ).matches;
  const theme = savedTheme || (systemPrefersDark ? "dark" : "light");

  document.documentElement.setAttribute("data-theme", theme);
}

/**
 * Toggle between dark and light themes
 */
function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";

  document.documentElement.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);
}

// ===================================
// TOAST NOTIFICATION SYSTEM
// ===================================

/**
 * Show an animated toast notification
 * @param {string} message - The message to display
 * @param {"success"|"error"|"info"} type - The type of toast
 * @param {number} duration - Auto-dismiss time in ms (default 4000)
 */
function showToast(message, type = "info", duration = 4000) {
  const container = document.getElementById("toast-container");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = `toast ${type}`;
  toast.textContent = message;
  container.appendChild(toast);

  // Auto-dismiss
  setTimeout(() => {
    toast.classList.add("removing");
    toast.addEventListener("animationend", () => toast.remove());
  }, duration);
}

// ===================================
// TIME-BASED GREETING
// ===================================

/**
 * Display greeting message based on current time
 */
function displayGreeting() {
  const greetingElement = document.getElementById("greeting");
  if (!greetingElement) return;

  const hour = new Date().getHours();
  let greeting;

  if (hour >= 5 && hour < 12) {
    greeting = "Good morning! ☀️";
  } else if (hour >= 12 && hour < 17) {
    greeting = "Good afternoon! 👋";
  } else if (hour >= 17 && hour < 22) {
    greeting = "Good evening! 🌙";
  } else {
    greeting = "Hello there! ✨";
  }

  greetingElement.textContent = greeting;
}

// ===================================
// TYPING EFFECT
// ===================================

/**
 * Animate text with a typing effect on the hero subtitle
 */
function initTypingEffect() {
  const element = document.getElementById("typing-subtitle");
  if (!element) return;

  const text = "Software Engineering Student";
  let index = 0;

  // Create a cursor span
  const cursor = document.createElement("span");
  cursor.className = "typing-cursor";
  element.appendChild(cursor);

  function typeChar() {
    if (index < text.length) {
      // Insert the next character before the cursor
      element.insertBefore(
        document.createTextNode(text.charAt(index)),
        cursor,
      );
      index++;
      setTimeout(typeChar, 70 + Math.random() * 50);
    }
    // Cursor stays blinking after typing finishes
  }

  // Small delay before starting
  setTimeout(typeChar, 600);
}

// ===================================
// SMOOTH SCROLLING
// ===================================

/**
 * Enable smooth scrolling for navigation links
 */
function initSmoothScroll() {
  const navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      const href = this.getAttribute("href");

      // Only apply to anchor links
      if (href.startsWith("#")) {
        e.preventDefault();
        const targetId = href.substring(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
          // Close mobile menu if open
          const navMenu = document.getElementById("nav-menu");
          const navToggle = document.getElementById("nav-toggle");
          if (navMenu && navMenu.classList.contains("active")) {
            navMenu.classList.remove("active");
            navToggle.classList.remove("active");
          }

          // Scroll to target with offset for fixed header
          const headerHeight = document.getElementById("header").offsetHeight;
          const targetPosition = targetSection.offsetTop - headerHeight;

          window.scrollTo({
            top: targetPosition,
            behavior: "smooth",
          });
        }
      }
    });
  });
}

// ===================================
// MOBILE MENU TOGGLE
// ===================================

/**
 * Toggle mobile navigation menu
 */
function initMobileMenu() {
  const navToggle = document.getElementById("nav-toggle");
  const navMenu = document.getElementById("nav-menu");

  if (navToggle && navMenu) {
    navToggle.addEventListener("click", function () {
      navMenu.classList.toggle("active");
      navToggle.classList.toggle("active");
    });
  }
}

// ===================================
// FORM VALIDATION
// ===================================

/**
 * Validate email format
 */
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Display error message for a form field
 */
function showError(fieldId, message) {
  const errorElement = document.getElementById(`${fieldId}-error`);
  const inputElement = document.getElementById(fieldId);

  if (errorElement && inputElement) {
    errorElement.textContent = message;
    inputElement.style.borderColor = "#ef4444";
  }
}

/**
 * Clear error message for a form field
 */
function clearError(fieldId) {
  const errorElement = document.getElementById(`${fieldId}-error`);
  const inputElement = document.getElementById(fieldId);

  if (errorElement && inputElement) {
    errorElement.textContent = "";
    inputElement.style.borderColor = "";
  }
}

/**
 * Validate contact form
 */
function validateForm(formData) {
  let isValid = true;

  // Clear all previous errors
  clearError("name");
  clearError("email");
  clearError("message");

  // Validate name
  const name = formData.get("name").trim();
  if (name === "") {
    showError("name", "Name is required");
    isValid = false;
  } else if (name.length < 2) {
    showError("name", "Name must be at least 2 characters");
    isValid = false;
  }

  // Validate email
  const email = formData.get("email").trim();
  if (email === "") {
    showError("email", "Email is required");
    isValid = false;
  } else if (!isValidEmail(email)) {
    showError("email", "Please enter a valid email address");
    isValid = false;
  }

  // Validate message
  const message = formData.get("message").trim();
  if (message === "") {
    showError("message", "Message is required");
    isValid = false;
  } else if (message.length < 10) {
    showError("message", "Message must be at least 10 characters");
    isValid = false;
  }

  return isValid;
}

/**
 * Handle form submission with toast notifications
 */
function initContactForm() {
  const form = document.getElementById("contact-form");
  const statusElement = document.getElementById("form-status");

  if (form && statusElement) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const formData = new FormData(form);

      if (validateForm(formData)) {
        // Simulate form submission
        statusElement.textContent = "Message sent successfully! ✓";
        statusElement.className = "form-status success";

        // Show success toast
        showToast("Message sent successfully! ✉️", "success");

        // Reset form
        form.reset();

        // Clear success message after 5 seconds
        setTimeout(() => {
          statusElement.textContent = "";
          statusElement.className = "form-status";
        }, 5000);
      } else {
        statusElement.textContent = "Please fix the errors above";
        statusElement.className = "form-status error";

        // Show error toast
        showToast("Please fix the form errors and try again.", "error");

        // Clear error message after 5 seconds
        setTimeout(() => {
          statusElement.textContent = "";
          statusElement.className = "form-status";
        }, 5000);
      }
    });

    // Real-time validation on blur
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");

    if (nameInput) {
      nameInput.addEventListener("blur", function () {
        const value = this.value.trim();
        if (value && value.length < 2) {
          showError("name", "Name must be at least 2 characters");
        } else {
          clearError("name");
        }
      });
    }

    if (emailInput) {
      emailInput.addEventListener("blur", function () {
        const value = this.value.trim();
        if (value && !isValidEmail(value)) {
          showError("email", "Please enter a valid email address");
        } else {
          clearError("email");
        }
      });
    }

    if (messageInput) {
      messageInput.addEventListener("blur", function () {
        const value = this.value.trim();
        if (value && value.length < 10) {
          showError("message", "Message must be at least 10 characters");
        } else {
          clearError("message");
        }
      });
    }
  }
}

// ===================================
// QUOTE FETCHING (Public API)
// ===================================

/**
 * Fetch a random quote from dummyjson.com and display it
 * Handles loading, success, and error states
 */
async function fetchQuote() {
  const loadingEl = document.getElementById("quote-loading");
  const contentEl = document.getElementById("quote-content");
  const errorEl = document.getElementById("quote-error");
  const textEl = document.getElementById("quote-text");
  const authorEl = document.getElementById("quote-author");

  if (!loadingEl || !contentEl || !errorEl) return;

  // Show loading state
  loadingEl.style.display = "flex";
  contentEl.style.display = "none";
  errorEl.style.display = "none";

  try {
    const response = await fetch("https://dummyjson.com/quotes/random");

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    const data = await response.json();

    // Show content
    textEl.textContent = data.quote;
    authorEl.textContent = `— ${data.author}`;
    loadingEl.style.display = "none";
    contentEl.style.display = "block";
  } catch (error) {
    // Show error state
    loadingEl.style.display = "none";
    errorEl.style.display = "block";
    showToast("Failed to load quote. Check your connection.", "error");
  }
}

/**
 * Initialize quote section — fetch on load and add button listener
 */
function initQuoteFetch() {
  fetchQuote();

  const newQuoteBtn = document.getElementById("new-quote-btn");
  if (newQuoteBtn) {
    newQuoteBtn.addEventListener("click", fetchQuote);
  }
}

// ===================================
// PROJECT FILTER & SEARCH
// ===================================

/**
 * Initialize project filtering by tag buttons and live search input
 */
function initProjectFilter() {
  const filterButtons = document.querySelectorAll(".filter-btn");
  const searchInput = document.getElementById("project-search");
  const projectCards = document.querySelectorAll(".project-card");
  const emptyState = document.getElementById("projects-empty");

  if (!filterButtons.length || !projectCards.length) return;

  let activeFilter = "all";

  /**
   * Apply combined filter (tag + search) and toggle empty state
   */
  function applyFilter() {
    const searchTerm = searchInput ? searchInput.value.toLowerCase().trim() : "";
    let visibleCount = 0;

    projectCards.forEach((card) => {
      const tags = (card.getAttribute("data-tags") || "").toLowerCase();
      const title = card.querySelector(".project-title")
        ? card.querySelector(".project-title").textContent.toLowerCase()
        : "";
      const description = card.querySelector(".project-description")
        ? card.querySelector(".project-description").textContent.toLowerCase()
        : "";

      const matchesTag = activeFilter === "all" || tags.includes(activeFilter);
      const matchesSearch =
        searchTerm === "" ||
        title.includes(searchTerm) ||
        description.includes(searchTerm) ||
        tags.includes(searchTerm);

      if (matchesTag && matchesSearch) {
        card.classList.remove("hidden");
        visibleCount++;
      } else {
        card.classList.add("hidden");
      }
    });

    // Toggle empty state
    if (emptyState) {
      emptyState.style.display = visibleCount === 0 ? "block" : "none";
    }
  }

  // Filter button click handlers
  filterButtons.forEach((btn) => {
    btn.addEventListener("click", function () {
      // Update active button
      filterButtons.forEach((b) => b.classList.remove("active"));
      this.classList.add("active");

      activeFilter = this.getAttribute("data-filter");
      applyFilter();
    });
  });

  // Live search input handler
  if (searchInput) {
    searchInput.addEventListener("input", applyFilter);
  }
}

// ===================================
// SCROLL ANIMATIONS
// ===================================

/**
 * Add fade-in animation to elements on scroll
 */
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe elements
  const elementsToAnimate = document.querySelectorAll(
    ".about-card, .skill-card, .project-card, .contact-form, .quote-card",
  );

  elementsToAnimate.forEach((element) => {
    observer.observe(element);
  });
}

// ===================================
// HEADER SCROLL EFFECT
// ===================================

/**
 * Add shadow to header on scroll
 */
function initHeaderScroll() {
  const header = document.getElementById("header");

  if (header) {
    window.addEventListener("scroll", function () {
      if (window.scrollY > 50) {
        header.style.boxShadow = "0 4px 6px -1px rgba(0, 0, 0, 0.1)";
      } else {
        header.style.boxShadow = "none";
      }
    });
  }
}

// ===================================
// INITIALIZATION
// ===================================

/**
 * Initialize all functionality when DOM is loaded
 */
document.addEventListener("DOMContentLoaded", function () {
  // Initialize theme
  initTheme();

  // Display greeting
  displayGreeting();

  // Initialize typing effect
  initTypingEffect();

  // Initialize smooth scrolling
  initSmoothScroll();

  // Initialize mobile menu
  initMobileMenu();

  // Initialize contact form
  initContactForm();

  // Initialize quote fetcher
  initQuoteFetch();

  // Initialize project filter & search
  initProjectFilter();

  // Initialize scroll animations
  initScrollAnimations();

  // Initialize header scroll effect
  initHeaderScroll();

  // Theme toggle button
  const themeToggle = document.getElementById("theme-toggle");
  if (themeToggle) {
    themeToggle.addEventListener("click", toggleTheme);
  }
});

// ===================================
// UTILITY: Update greeting periodically
// ===================================

/**
 * Update greeting every minute in case time period changes
 */
setInterval(displayGreeting, 60000);
