# Santosh Pathak - Portfolio Website

A modern, responsive portfolio website built with **HTML**, **CSS**, and **JavaScript**. Showcasing professional experience, technical skills, projects, achievements, and contact information.

## 🎯 Features

- ✨ **Smooth Animations** - Typewriter effects, fade-in animations, and scroll transitions
- 📱 **Fully Responsive** - Works seamlessly on desktop, tablet, and mobile devices
- 🎨 **Modern Design** - Dark theme with gradient accents and glassmorphism effects
- ⚡ **Interactive Elements** - Animated skill bars, terminal effects, and smooth navigation
- 📊 **Comprehensive Sections**:
  - Hero section with typewriter effect
  - About me with education and certifications
  - Professional experience timeline
  - Technical skills with progress indicators
  - Featured projects showcase
  - Achievements and competitive programming stats
  - Contact form and social links

## 📁 Project Structure

```
devops-practice/
├── index.html          # Main HTML file
├── style.css          # All CSS styling
├── script.js          # JavaScript functionality
└── README.md          # This file
```

## 🚀 Getting Started

### Prerequisites
- Any modern web browser (Chrome, Firefox, Safari, Edge)
- No build tools or dependencies required!

### How to Run

1. **Clone or download the project**
```bash
git clone <repository-url>
cd devops-practice
```

2. **Open in browser**
   - Simply double-click `index.html` 
   - Or use a local server (optional):
```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (with http-server)
npx http-server
```

3. **Access the website**
   - Local: `http://localhost:8000` (if using a server)
   - Direct: Open `index.html` in your browser

## 💻 Technologies Used

### Frontend Stack
- **HTML5** - Semantic markup
- **CSS3** - Modern styling with gradients, flexbox, and grid
- **JavaScript (ES6+)** - No frameworks, pure vanilla JavaScript

### Features Implementation
- Intersection Observer API for scroll animations
- CSS animations and transitions
- Responsive design with media queries
- LocalStorage ready for enhancements

## 📋 Sections Overview

### 1. Navigation Bar
- Fixed responsive navbar
- Smooth scroll to sections
- Mobile hamburger menu
- Active state on scroll

### 2. Hero Section
- Typewriter effect on name
- Call-to-action buttons
- Animated terminal windows in background
- Gradient text effects

### 3. About Section
- Education details
- Certifications list
- Major achievements
- All in responsive card layout

### 4. Experience Section
- Current position at Tedekstra
- Past internship at GEU
- Project descriptions with tech stacks
- Key achievements

### 5. Skills Section
- 6 skill categories:
  - Programming Languages
  - Frontend Development
  - Backend Development
  - Database & Cloud
  - Cloud & DevOps
  - Development Tools
- Animated progress bars
- 25+ individual skills tracked

### 6. Projects Section
- 6 featured projects
- Project descriptions and tech stacks
- GitHub links
- Live demo links (when available)
- Hover effects with image zoom

### 7. Achievements Section
- Competitive programming stats
- Certification details
- Award badges
- Links to profiles

### 8. Contact Section
- Contact information (phone, email, location)
- Social media links
- Contact form
- Responsive grid layout

## 🎨 Design Features

### Colors & Themes
- **Primary**: Pink/Magenta (#ec4899)
- **Secondary**: Purple (#a855f7)
- **Dark Background**: Dark slate (#0f172a)
- **Text**: White with light gray variants

### Animations
- Typewriter text effect
- Fade-in on scroll
- Hover scale/translate effects
- Smooth transitions throughout
- Terminal blinking cursor

### Responsiveness
- **Desktop**: Full layout with all features
- **Tablet** (≤768px): Adjusted grid layouts
- **Mobile** (≤480px): Single column layouts, full-width buttons

## 📱 Browser Support

| Browser | Support |
|---------|---------|
| Chrome  | ✅ Full |
| Firefox | ✅ Full |
| Safari  | ✅ Full |
| Edge    | ✅ Full |
| IE 11   | ❌ No  |

## 🔧 Customization

### Change Personal Information
Edit `index.html`:
- Name, email, phone in respective sections
- Social media links (LinkedIn, GitHub, etc.)
- Project links and descriptions
- Skills and experience details

### Modify Colors
Edit `style.css`:
```css
:root {
    --primary-color: #ec4899;      /* Change pink */
    --secondary-color: #a855f7;    /* Change purple */
    --dark-bg: #0f172a;            /* Change background */
    /* ... other colors ... */
}
```

### Adjust Animations
Edit `script.js`:
```javascript
// Typewriter speed (ms)
typingSpeed: 100,
deletingSpeed: 50,
pauseTime: 2000
```

## 📚 JavaScript Classes

### TypeWriter
Handles the main title typewriter effect
```javascript
new TypeWriter(element, {
    typingSpeed: 100,
    deletingSpeed: 50,
    pauseTime: 2000
});
```

### TerminalTypeWriter
Creates animated terminal command effects
```javascript
new TerminalTypeWriter('elementId', {
    commands: ['cmd1', 'cmd2', 'cmd3'],
    typingSpeed: 80
});
```

### Navigation
Manages navbar, mobile menu, and scroll behavior

### SmoothScroll
Provides smooth scrolling to sections

### ScrollAnimations
Triggers animations on element visibility

### ContactForm
Handles contact form submission

## 🎯 Performance

- **No external dependencies** - Pure HTML/CSS/JavaScript
- **Optimized animations** - Using native CSS and Intersection Observer
- **Lightweight** - Minimal file sizes
- **Fast loading** - No build process needed

## 📈 Future Enhancements

- [ ] Dark/Light theme toggle
- [ ] Multi-language support
- [ ] Blog section
- [ ] Case studies for projects
- [ ] Backend form submission
- [ ] Real-time chat integration
- [ ] Analytics tracking

## 📞 Contact

- **Email**: pathaksantosh987@gmail.com
- **Phone**: +91 95287 90597
- **LinkedIn**: [Santosh Pathak](https://www.linkedin.com/in/santosh-pathak-68a971214/)
- **GitHub**: [Santosh-Pathak](https://github.com/Santosh-Pathak)
- **LeetCode**: [Top 5% globally](https://leetcode.com/u/21011177/)

## 📄 License

This portfolio is open source and available under the MIT License.

## 🙏 Acknowledgments

- Built from React component data
- Inspired by modern portfolio designs
- Font Awesome for icons
- CSS Grid and Flexbox for layouts

---

**Last Updated**: April 2024
**Version**: 1.0
**Status**: Production Ready ✅
