# DurkkasHR - HRMS Landing Page

A modern, responsive landing page for DurkkasHR HRMS built with React, Vite, and Tailwind CSS.

## Features

- ✅ Modern, clean design inspired by People HR India
- ✅ Fully responsive (Desktop, Tablet, Mobile)
- ✅ Modular component architecture
- ✅ Sticky navigation bar
- ✅ Smooth hover animations
- ✅ Custom color palette (Deep Teal & Orange accent)

## Tech Stack

- **React 18** - UI library
- **Vite 5** - Build tool
- **Tailwind CSS 3** - Styling framework

## Project Structure

```
├── src/
│   ├── components/
│   │   ├── Topbar.jsx      # Top contact bar
│   │   ├── Navbar.jsx      # Main navigation
│   │   └── HeroSection.jsx # Hero section with CTA
│   ├── assets/             # Images folder
│   ├── App.jsx             # Main app component
│   ├── main.jsx            # Entry point
│   └── index.css           # Global styles
├── index.html
├── package.json
├── vite.config.js
└── tailwind.config.js
```

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Components

### Topbar
- Contact information (email & phone)
- Social media icons
- Navy blue background (#0c1b33)

### Navbar
- Logo with HR icon
- Navigation menu items
- Sticky positioning
- Active menu highlighting
- Mobile responsive menu

### HeroSection
- Tagline and description
- Two CTA buttons (Request Demo & Explore Features)
- Image placeholder area (ready for professional HR image)
- Gradient background with decorative elements

## Color Palette

- **Navy Blue**: `#0c1b33` - Topbar background
- **Deep Teal**: `#007b83` - Primary color
- **Orange**: `#ff7b00` - Accent color
- **Charcoal**: `#333333` - Text color
- **Light Gray**: `#f9f9f9` - Background

## Adding Images

Place your HR/business-related images in the `/src/assets` folder and update the HeroSection component to use them.

## License

MIT

