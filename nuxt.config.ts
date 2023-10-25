// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@vite-pwa/nuxt"],

  tailwindcss: {
    cssPath: "~/assets/css/tailwind.css",
    configPath: "~/tailwind.config.ts",
  },
  pwa: {
    manifest: {
      name: "smkn1ciomas",
      short_name: "skanic",
      theme_color:"#fff",
      background_color:"#fff",
      display: "standalone",
      orientation: "portrait",
      scope: "/",
      start_url: "/",
      icons: [
        {
          src: "images/icons/icon-96x96.png",
          sizes: "96x96",
          type: "image/png"
        },
        {
          src: "images/icons/icon-120x120.png",
          sizes: "120x120",
          type: "image/png"
        },
        {
          src: "images/icons/icon-144x144.png",
          sizes: "144x144",
          type: "image/png"
        },
      ]
    },
    devOptions: {
      enabled: true,
    }
  }
})
