import { Bot } from 'grammy'
import { useRuntimeConfig } from '#imports'

const config = useRuntimeConfig()
export const bot = new Bot(config.telegramBotToken)

bot.command('start', async (ctx) => {
  await ctx.reply('Welcome to MyWallet Bot! 👋')
})

// Initialize the bot
export function start() {
  bot.start()
}