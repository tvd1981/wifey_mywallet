import { drizzle } from 'drizzle-orm/d1'
export { sql, eq, and, or, desc } from 'drizzle-orm'

import * as schema from '../database/schema'

export const tables = schema

export function useDrizzle() {
  return drizzle(hubDatabase(), { schema })
}

export type User = typeof schema.users.$inferSelect
export type Wallet = typeof schema.wallets.$inferSelect
export type Transaction = typeof schema.transactions.$inferSelect
export type Category = typeof schema.categories.$inferSelect
export type Budget = typeof schema.budgets.$inferSelect
export type TransactionWithCategory = Transaction & { category: Category }
export type TransactionWithWallet = Transaction & { wallet: Wallet }