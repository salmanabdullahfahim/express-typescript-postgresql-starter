import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

prisma
  .$connect()
  .then(() => console.log("Connected to database"))
  .catch((err: any) => console.error("Failed to connect:", err));

export default prisma;
