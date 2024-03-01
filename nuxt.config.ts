// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
    },
  },
  // vue: {
  //   compilerOptions: {
  //     isCustomElement: (tag) => tag.startsWith("v-"),
  //   },
  // },
  devtools: { enabled: false },
  css: ["@/assets/css/style.css"],
  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],
  // build: {
  //   transpile: ["vuetify"],
  // },
  // plugins: ["@/plugins/vuetify.ts"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ["@nuxt/image", "vuetify-nuxt-module"],
  // routeRules: {
  //   "/": { ssr: true },
  //   "/countries/[name]": { ssr: true },
  // },
  ssr: true,
});
