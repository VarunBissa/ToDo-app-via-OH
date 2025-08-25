import { PrismaClient } from './generated/prisma/index.js'

export const prisma = new PrismaClient()

export async function shutdown() {
  await prisma.$disconnect().catch(() => {})
}

process.on('SIGINT', async () => {
  await shutdown()
  process.exit(0)
})
process.on('SIGTERM', async () => {
  await shutdown()
  process.exit(0)
})
