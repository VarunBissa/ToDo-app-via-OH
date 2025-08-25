# Task List

1. 🔄 Create feature branch and commit current changes
Prepare git config, create branch, commit existing scaffold changes.
2. ⏳ Install frontend libraries (router, query, ky/axios, rhf, zod)
Add minimal app shell with providers and routes.
3. ⏳ Add Prisma with Postgres schema and docker-compose
Models: User, Todo, RefreshToken; .env setup; generate client.
4. ⏳ Start Postgres container and run initial migration
docker-compose up -d; prisma migrate dev --name init
5. ⏳ Commit and push branch to GitHub
Push to new branch; do not open PR unless asked.

