<template>
        <v-app>
      <v-toolbar color="indigo" dark>
        <v-toolbar-title class="ml-5 mr-4">Nicolas MEYER</v-toolbar-title>
  
        <v-spacer></v-spacer>
  
        <v-btn text>Accueil</v-btn>
        <v-btn text>À propos</v-btn>
        <v-btn text>Contact</v-btn>
      </v-toolbar>

      <v-content>
        <v-container class="d-flex flex-column align-center justify-center">
          <img src="../static/images/nico.jpg" class=" w-60 border 2 rounded-lg" alt="">
          <v-card-title class="headline text-center mt-5 text-orange">PRESENTATION</v-card-title>
          <v-card-text class="text-center text-3xl	">
            <p class="text-3xl	">
                Bonjour à tous je me présente, je m'appelle Nicolas Meyer, en tant qu'auto-entrepreneur,

                je vous propose mes services d'installation de système d'alarme et vidéosurvéillance !
                
                En vous prommettant un travail ainsi qu'un suivi professionnel !
                
                N'hésitez pas à me contacter pour tout renseignement ou demande de devis !
            </p>
          </v-card-text>
        
        </v-container>
        <v-carousel>
            <v-carousel-item
              v-for="(item, i) in items"
              :key="i"
              :src="item.src"
            ></v-carousel-item>
          </v-carousel>
      </v-content>

     
      <v-footer class="absolute " color="indigo" dark>
        <v-spacer></v-spacer>
  
        <p class="text-white">Mon Site - Tous droits réservés</p>
  
        <v-spacer></v-spacer>
      </v-footer>
    </v-app>

  </template>
  <script>
export default {
  data () {
    return {
      items: [
        {
          src: 'nuxt-app\static\images\im1.png'
        },
        {
          src: 'nuxt-app\static\images\im2.png'
        },
    
      ]

    }
  }
}
</script>




