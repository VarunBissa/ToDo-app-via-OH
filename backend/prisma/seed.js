import { PrismaClient } from '../src/generated/prisma';
import bcrypt from 'bcrypt';
const prisma = new PrismaClient();
async function main() {
    const email = 'demo@example.com';
    const password = 'demo1234';
    const passwordHash = await bcrypt.hash(password, 10);
    const user = await prisma.user.upsert({
        where: { email },
        update: {},
        create: { email, passwordHash },
    });
    console.log('Seeded user:', { email, password });
}
main().catch((e) => {
    console.error(e);
    process.exit(1);
}).finally(async () => {
    await prisma.$disconnect();
});
//# sourceMappingURL=seed.js.map