# 💱 CurrencyLanding

A modern, responsive currency exchange landing page built with **React 19**, **TypeScript**, **Vite**, and **Tailwind CSS v4**. Designed to showcase real-time currency exchange rates, conversion features, and a polished user experience.

---

## ✨ Features

- ⚡ **Blazing-fast** development with Vite HMR
- 🎨 **Beautiful UI** powered by Tailwind CSS v4 and shadcn/ui components
- 🔠 **Geist Variable** font for a clean, modern look
- 🌗 **Dark mode** ready with `oklch`-based design tokens
- 📱 **Fully responsive** layout for mobile, tablet, and desktop
- ♿ **Accessible** components built on Base UI primitives
- 🧩 **Component-driven** architecture with reusable UI building blocks

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| [React 19](https://react.dev/) | UI framework |
| [TypeScript](https://www.typescriptlang.org/) | Type safety |
| [Vite 8](https://vite.dev/) | Build tool & dev server |
| [Tailwind CSS v4](https://tailwindcss.com/) | Utility-first styling |
| [shadcn/ui](https://ui.shadcn.com/) | Component library |
| [Base UI](https://base-ui.com/) | Unstyled accessible primitives |
| [Lucide React](https://lucide.dev/) | Icon set |
| [Geist Variable](https://vercel.com/font) | Typography |
| [tw-animate-css](https://github.com/nzion/tw-animate-css) | CSS animations |

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** ≥ 18
- **npm** ≥ 9

### Installation

```bash
# Clone the repository
git clone https://github.com/moham60/currencyLanding.git
cd currencyLanding

# Install dependencies
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser to see the app.

### Build for Production

```bash
npm run build
```

The optimised output is placed in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

---

## 📁 Project Structure

```
currencyLanding/
├── public/              # Static assets served as-is
├── src/
│   ├── assets/          # Images and SVG files
│   ├── components/
│   │   ├── ui/          # Reusable UI primitives (Button, etc.)
│   │   └── About.tsx    # About section component
│   ├── lib/
│   │   └── utils.ts     # Shared utility functions (cn, etc.)
│   ├── App.tsx          # Root application component
│   ├── App.css          # Component-scoped styles
│   ├── index.css        # Global styles & design tokens
│   └── main.tsx         # Application entry point
├── index.html           # HTML shell
├── vite.config.ts       # Vite configuration
├── tsconfig.json        # TypeScript configuration
└── package.json
```

---

## 🎨 Design Tokens

The project uses a dark-first design system defined via CSS custom properties and Tailwind's `@theme` directive. Key design tokens:

- **Background**: Deep navy (`hsl(222, 47%, 6%)`)
- **Primary**: Teal/cyan (`hsl(172, 66%, 50%)`)
- **Accent**: Purple (`hsl(265, 70%, 60%)`)
- **Font**: Geist Variable (sans-serif)
- **Radius**: `0.75rem` base

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

---

## 📄 License

This project is open source. See the repository for licence details.

---

<p align="center">Made with ❤️ using React + Vite</p>
