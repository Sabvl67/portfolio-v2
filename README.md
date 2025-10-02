# Personal Portfolio Website

A modern, production-ready portfolio website built with React, TypeScript, and Tailwind CSS. Features smooth animations, dark/light theme toggle, and full responsiveness.

## ✨ Features

- **🎨 Modern Design**: Clean, minimal design with subtle animations and micro-interactions
- **🌓 Theme Toggle**: Smooth transition between light and dark modes with persistent preference
- **📱 Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **⚡ Performance Optimized**: Lazy loading, optimized animations, and clean code
- **♿ Accessible**: ARIA labels, keyboard navigation, and reduced motion support
- **🎯 SEO Ready**: Semantic HTML5 structure

## 🚀 Quick Start

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd portfolio-v2
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🛠️ Built With

- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS 4** - Utility-first CSS framework
- **CSS Variables** - Theme management
- **Intersection Observer API** - Scroll animations

## 📁 Project Structure

```
src/
├── components/         # React components
│   ├── Header.tsx     # Navigation header
│   ├── Hero.tsx       # Hero/intro section
│   ├── Skills.tsx     # Skills section
│   ├── Projects.tsx   # Projects section
│   ├── ProjectCard.tsx # Individual project card
│   ├── Contact.tsx    # Contact form and social links
│   ├── Footer.tsx     # Footer
│   └── ThemeToggle.tsx # Theme switcher button
├── contexts/          # React contexts
│   └── ThemeContext.tsx # Theme state management
├── hooks/             # Custom hooks
│   └── useIntersectionObserver.ts # Scroll animation hook
├── data/              # Content data
│   └── portfolio.ts   # Portfolio content (easily customizable)
├── types/             # TypeScript types
│   └── index.ts       # Type definitions
├── App.tsx            # Main app component
├── App.css            # Global styles
└── index.tsx          # App entry point
```

## 🎨 Customization

### Update Your Information

Edit `src/data/portfolio.ts` to customize:

- **Hero Data**: Name, tagline, and introduction
- **Skills**: Technical and soft skills with proficiency levels
- **Projects**: Project details, tech stack, challenges, and results
- **Social Links**: GitHub, LinkedIn, Twitter, email

### Customize Colors

Modify CSS variables in `src/App.css`:

```css
:root {
  --accent-primary: #0066ff;    /* Primary accent color */
  --accent-secondary: #4d94ff;  /* Secondary accent color */
  /* ... other variables */
}
```

### Add Your Own Images

Replace project image placeholders in the `ProjectCard` component or update the project data with actual image URLs.

## 📦 Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build/` folder.

## 🚀 Deployment

### Deploy to Netlify

1. Push your code to GitHub
2. Connect your repository to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `build`
5. Deploy!

### Deploy to Vercel

```bash
npm install -g vercel
vercel
```

## 📝 Key Features Explained

### Theme System
- Uses React Context for state management
- Persists preference in localStorage
- CSS variables for seamless theme switching
- Smooth transitions between themes

### Performance Optimizations
- Lazy loading of ProjectCard components
- Intersection Observer for efficient scroll animations
- Optimized CSS animations
- Minimal re-renders with proper React hooks

### Animations
- Fade-in effects on scroll
- Smooth hover states
- Progress bar animations
- Floating background elements
- Scroll indicator bounce

### Responsive Design
- Mobile-first approach
- Hamburger menu for mobile
- Flexible grid layouts
- Touch-friendly interactions

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

## 📄 License

This project is open source and available under the MIT License.

## 💬 Contact

- Update the contact information in `src/data/portfolio.ts`
- The contact form is set up with a basic handler - integrate with your preferred backend or service (FormSpree, EmailJS, etc.)

---

**Built with ❤️ and ☕ by [Your Name]**
