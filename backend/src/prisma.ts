import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const connectToDb = async () => prisma.$connect();

const disconnectFromDb = async () => prisma.$disconnect();

export { prisma, connectToDb, disconnectFromDb };
