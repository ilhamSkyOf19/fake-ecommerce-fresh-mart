import { PrismaClient } from "generated/prisma";

// deklarasi global
declare global {
    var prisma: PrismaClient | undefined;
}

// generate 
export const prisma = global.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") global.prisma = prisma

