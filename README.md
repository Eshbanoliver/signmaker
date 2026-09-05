# Sign Maker - Custom Signage & Branding Web Platform

A modern, high-performance web application built for custom signage manufacturing, corporate branding, architectural signs, and LED displays. Designed with smooth micro-animations, responsive UI layouts, and SEO optimizations.

## 🚀 Features

- **Dynamic Homepage & Portfolio**: Interactive showcases highlighting custom signage solutions and project galleries.
- **Services Catalog**: In-depth presentation of signage services including indoor/outdoor signs, LED illumination, 3D lettering, and architectural branding.
- **Company Profile & Counter Animations**: Interactive statistics counter and company overview (`About` page).
- **Testimonials Section**: Customer reviews and showcase slider.
- **Contact & Inquiry System**: Integrated contact form and interactive location maps.
- **Floating Action Controls**: Quick access buttons for instant communication.
- **SEO & Social Sharing**: Dynamic metadata management powered by `react-helmet-async`.
- **Code Splitting & Performance**: Route-level lazy loading with React Suspense for optimized page load times.

## 🛠️ Tech Stack

- **Core**: [React 19](https://react.dev/), [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite 8](https://vitejs.dev/)
- **Routing**: [React Router v7](https://reactrouter.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Styling**: Vanilla CSS (Custom Design System & CSS Variables)
- **SEO Management**: [React Helmet Async](https://github.com/staylor/react-helmet-async)

## 📁 Project Structure

```
signmaker/
├── public/
│   ├── .htaccess          # Apache fallback rules for SPA routing
│   └── _redirects          # Netlify routing rules
├── src/
│   ├── components/        # Reusable UI components
│   │   ├── Counter.tsx
│   │   ├── FloatingButtons.tsx
│   │   ├── Footer.tsx
│   │   ├── Navbar.tsx
│   │   └── ScrollToTop.tsx
│   ├── pages/             # Route pages & dedicated styles
│   │   ├── About.tsx & About.css
│   │   ├── Contact.tsx & Contact.css
│   │   ├── Home.tsx & Home.css
│   │   ├── Services.tsx & Services.css
│   │   └── Testimonials.tsx & Testimonials.css
│   ├── App.tsx            # Main layout & route definitions
│   ├── index.css          # Design tokens & global utility classes
│   └── main.tsx           # Application entry point
├── package.json
├── tsconfig.json
├── vercel.json            # Vercel deployment configuration
└── vite.config.ts         # Vite build configuration
```

## ⚙️ Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18.0.0 or higher recommended)
- `npm` or `pnpm` or `yarn`

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-org/sign-maker.git
   cd sign-maker
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` in your browser.

4. **Build for production**:
   ```bash
   npm run build
   ```
   The production-ready assets will be generated in the `dist/` directory.

5. **Preview production build locally**:
   ```bash
   npm run preview
   ```

6. **Lint code**:
   ```bash
   npm run lint
   ```

## 🌐 Deployment

This application is ready for deployment across static hosting platforms:

- **Vercel**: Pre-configured via `vercel.json` for single-page app (SPA) routing fallback.
- **Netlify**: Pre-configured via `public/_redirects`.
- **Apache Web Server**: Pre-configured via `public/.htaccess` to rewrite all requests to `index.html`.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

