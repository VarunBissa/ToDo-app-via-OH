# Frontend (React + TypeScript + Vite + Tailwind)

This is the web client for the ToDo app.

## Prerequisites
- Node.js 20+
- npm 10+

## Install & Run
```
cd frontend
npm install
npm run dev
```

- Dev server runs on `0.0.0.0:12000` with permissive CORS/iframe headers for development.
- Access via your runtime host on port 12000.

## Configuration
- The API base URL (for the backend) defaults to `http://localhost:12001` during development. Adjust your HTTP client configuration if needed.

## Available Scripts
- `npm run dev` — start dev server
- `npm run build` — build for production
- `npm run preview` — preview production build

## Routes
- `/` Home
- `/login`
- `/signup`

Tailwind CSS is set up via the modern import style. Adjust Tailwind config as needed.
