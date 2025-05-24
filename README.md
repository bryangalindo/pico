# 🍅 PicoAI: Unlock Job Referrals From Your Entire Network.

I have 26 hours to build PicoAI as part of the #AgentHacks2025 Hackathon.

PicoAI analyzes your LinkedIn connections, finds job openings at their companies, and crafts personalized referral messages — all automatically.

## Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (version 18 or higher recommended)
- npm (comes with Node.js) or [yarn](https://yarnpkg.com/)

## Getting Started

1. Clone the repository:
```bash
git clone <your-repository-url>
cd <repository-name>
```

2. Install dependencies:
```bash
npm install
# or if you use yarn
yarn install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
```

The application will be available at `http://localhost:5173` by default.

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the application for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check code quality

## Project Structure

- `src/` - Source files
- `public/` - Static assets
- `dist/` - Production build output
- `index.html` - Entry HTML file
- `vite.config.ts` - Vite configuration
- `tailwind.config.js` - Tailwind CSS configuration
- `tsconfig.json` - TypeScript configuration

## Technologies Used

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Router](https://reactrouter.com/)

## Development

The project uses ESLint for code linting and TypeScript for type checking. Make sure to run the linter before committing your changes:

```bash
npm run lint
```

## Building for Production

To create a production build:

```bash
npm run build
```

The build output will be in the `dist` directory. You can preview the production build locally using:

```bash
npm run preview
```
