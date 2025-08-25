# Backend (Node + Express + Prisma)

This service exposes the API for the ToDo app.

## Prerequisites
- Node.js 20+
- npm 10+
- Postgres 16 (local or managed)
- Docker (optional, for local DB via compose)

## Environment
Create `backend/.env` (not committed). Example for local Postgres:

```
DATABASE_URL="postgresql://postgres:varun@localhost:5432/todo?schema=public"
JWT_ACCESS_SECRET="dev_access_secret"
JWT_REFRESH_SECRET="dev_refresh_secret"
ACCESS_TOKEN_TTL="15m"
REFRESH_TOKEN_TTL="7d"
CORS_ORIGIN="*"
```

## Install & DB Setup
```
cd backend
npm install

# If you want a local Postgres via Docker:
docker compose up -d

# Prisma
npm run prisma:generate
npm run prisma:migrate
npm run prisma:seed  # Seeds demo user: demo@example.com / demo1234
```

## Run
- Dev: `npm run dev` (0.0.0.0:12001)
- Build: `npm run build`
- Start: `npm start`

## Endpoints
- GET `/health` — service health

CORS is permissive for development; refine in production.
