# Mylaram Shashank | Portfolio

A personal portfolio website built with React, TypeScript, and Vite. It presents an introduction, background and skills, selected projects, and contact information.

## Tech Stack

- React and TypeScript
- Vite
- Tailwind CSS and shadcn/ui
- Framer Motion
- React Router
- TanStack Query for query and server-state management

## Run Locally

Requirements: Node.js and npm.

```bash
git clone https://github.com/mylaramshashank/portfolioshashank.git
cd portfolioshashank
npm install
npm run dev
```

The Vite development server is configured for port `8080`. If that port is occupied, Vite may select the next available port and prints the actual URL in the terminal.

## Available Scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the development server. |
| `npm run build` | Create a production build. |
| `npm run build:dev` | Create a development-mode build. |
| `npm run lint` | Run ESLint. |
| `npm run preview` | Preview the production build locally. |

## Project Structure

```text
src/
├── assets/       # Images and other imported assets
├── components/   # Portfolio sections and reusable UI components
├── hooks/        # Custom React hooks
├── lib/          # Shared utilities
└── pages/        # Route-level page components
```
