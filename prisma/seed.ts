import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  console.log("Seeding database...");

  // Create Tenants
  const tenantA = await prisma.tenant.create({ data: { name: "Org A" } });
  const tenantB = await prisma.tenant.create({ data: { name: "Org B" } });

  // Hash Password
  const hashedPassword = await bcrypt.hash("admin123", 10);

  // Create Users
  const adminUser = await prisma.user.create({
    data: {
      email: "admin@example.com",
      password: hashedPassword,
      tenants: {
        create: [
          { tenantId: tenantA.id, role: "admin" },
          { tenantId: tenantB.id, role: "manager" },
        ],
      },
    },
  });

  console.log("Seeding complete! Default admin:", adminUser.email);
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
