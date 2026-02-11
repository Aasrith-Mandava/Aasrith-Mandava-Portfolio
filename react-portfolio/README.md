# Aasrith's Portfolio - React Version

A modern, responsive portfolio built with React and Vite, featuring smooth animations, interactive gradients, and a clean design.

## Features

- ⚡ Built with React + Vite for fast development
- 🎨 Modern, minimalist design with smooth animations
- 📱 Fully responsive across all devices
- 🎭 Interactive gradient effects that follow cursor
- ⏰ Live clock showing Atlanta timezone
- 🔄 Scroll-triggered animations
- 🎯 Clean component architecture

## Getting Started

### Install Dependencies
```bash
npm install
```

### Run Development Server
```bash
npm run dev
```

The site will be available at `http://localhost:5173` (or another port if 5173 is in use)

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── Navigation.jsx    # Fixed navigation bar
│   ├── Hero.jsx          # Hero section with animated gradients
│   ├── Experience.jsx    # Work experience cards
│   ├── Projects.jsx      # Project showcase
│   ├── Skills.jsx        # Skills categorized by type
│   ├── Education.jsx     # Education timeline
│   └── Footer.jsx        # Footer with links
├── App.jsx               # Main app component
├── App.css               # All styles
└── main.jsx              # Entry point
```

## Customization

### Update Personal Information

Edit the data arrays in each component:
- `Experience.jsx` - Update work experience
- `Projects.jsx` - Add/modify projects
- `Skills.jsx` - Update skill categories
- `Education.jsx` - Modify education details
- `Hero.jsx` - Change hero text and location

### Modify Colors

Edit CSS variables in `App.css`:
```css
:root {
  --accent: #e85d4c;        /* Primary accent color */
  --bg-primary: #f8f8f6;    /* Background color */
  --text-primary: #1a1a1a;  /* Text color */
  /* ... more variables */
}
```

## Technologies Used

- React 18
- Vite
- CSS3 (Custom Properties, Grid, Flexbox)
- Google Fonts (Inter, Playfair Display)

## Deployment

You can deploy this portfolio to:
- **Vercel**: `npm i -g vercel && vercel`
- **Netlify**: Drag and drop the `dist` folder after building
- **GitHub Pages**: Use `gh-pages` package
- **AWS S3 + CloudFront**: Upload `dist` folder to S3 bucket

## License

© 2026 Aasrith Mandava
