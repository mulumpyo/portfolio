// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/eslint', '@nuxt/image', '@nuxt/ui'],
  ssr: true,
  nitro: {
    preset: 'cloudflare_pages',
    rollupConfig: {
      external: ['node:stream', 'node:url']
    },
    cloudflare: {
      deployConfig: true,
      nodeCompat: true,
    }
  },
  runtimeConfig: {
    supabaseUrl: process.env.SUPABASE_URL,
    supabaseSecretKey: process.env.SUPABASE_SECRET_KEY
  }
})