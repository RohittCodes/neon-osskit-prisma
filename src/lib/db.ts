import { PrismaClient } from '@prisma/client';

declare global {
    var prisma: PrismaClient | undefined;
}

export const db = globalThis.prisma || new PrismaClient();

if(process.env.NODE_ENV !== 'production') {
  globalThis.prisma = db;
}

/**
 * While using a pooled database connection, you can use the globalThis object to store the connection and reuse it across requests.
 * This way, you can avoid creating a new connection for each request, which can be expensive.
 * 
 * Example:
 * export const db = globalThis.prisma || new PrismaClient({
 *  datasources: {
 *     db: {
 *      url: `${process.env.DATABASE_URL}?pgbouncer=true&connect_timeout=30&pool_timeout=30`,
 *     },
 *   },
 * })
 */