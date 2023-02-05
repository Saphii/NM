export default defineNuxtConfig({
    css: [
      "@/assets/css/styles.css",
      "vuetify/lib/styles/main.sass",
      "@mdi/font/css/materialdesignicons.min.css",
    ],
    modules: ['@nuxtjs/tailwindcss'],

    build: {

      
      transpile: ["vuetify"],
      

    },
    
    
  });