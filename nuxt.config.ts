// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-07-30',
  ssr: false,
  typescript: {
    strict: true
  },
  // Nuxt 4 directory structure and features
  // https://nuxt.com/docs/getting-started/upgrade#testing-nuxt-4
  future: { compatibilityVersion: 4 },
  // Nuxt Modules
  // https://nuxt.com/modules
  modules: [
    '@nuxthub/core',
    '@nuxt/eslint',
    '@nuxtjs/tailwindcss'
  ],
  hub: {
    database: true,
    kv: true,
    cache: true,
  },
  nitro: {
    experimental: {
      // Enable Server API documentation within NuxtHub
      openAPI: true
    }
  },
  // Development
  devtools: { enabled: true },
  runtimeConfig: {
    telegramBotToken: process.env.NUXT_TELEGRAM_BOT_TOKEN,
    openaiApiKey: process.env.NUXT_OPENAI_API_KEY,
    superAdminId: process.env.NUXT_SUPER_ADMIN_ID,
    public: {
      baseUrl: process.env.NUXT_PUBLIC_BASE_URL
    }
  }
})
