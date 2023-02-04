<template>
        <v-app>
      <v-toolbar color="indigo" dark>
        <v-toolbar-title class="ml-5 mr-4">Nicolas MEYER</v-toolbar-title>
  
        <v-spacer></v-spacer>
  
        <v-btn text>Accueil</v-btn>
        <v-btn text>À propos</v-btn>
        <v-btn text>Contact</v-btn>
      </v-toolbar>
      <div class="d-flex flex-column align-center justify-center">
      <img src="../static/images/logo-removebg-preview.png" alt="">

      <h1 class="text-center text-3xl mb-2 mt-5 text-blue
      ">Installateur d'alarme<span class="text-orange"> Somfy  </span>et vidéosurveillance</h1>
    </div>
      <v-content>
        <v-container class="d-flex align-center justify-center">
      

          <v-card-text class=" bg-indigo text-white d-flex align-center text-center text-3xl  border 2	">
            <p class="text-3xl 	">
                Bonjour à tous je me présente, je m'appelle Nicolas Meyer, en tant qu'auto-entrepreneur,

                je vous propose mes services d'installation de système d'alarme et vidéosurvéillance !
                
                En vous prommettant un travail ainsi qu'un suivi professionnel !
                
                N'hésitez pas à me contacter via le formulaire en ligne pour tout renseignement ou demande de devis !
            </p>
            <img src="../static/images/nico.jpg" class=" w-40 border 2 rounded-lg" alt="">

          </v-card-text>

        </v-container>
        
        <v-container class="d-flex justify-center">
        <div class="conteneurs">
        <div class="cartes">

            <div class="minicartes">
                <img class="img" src="../static/images/imageAlarme.png">
                <div class="carte-titre">
                    <h4 class="title">Gestion via smartphone !</h4>
                </div>
                <div class="carte-corp">
                    <p>Android / IOS</p>
                </div>
            </div>

            <div class="minicartes">
                <img class="img" src="../static/images/logoSomfy.jpg">
                <div class="carte-titre">
                    <h4 class="title">Matériels Somfy</h4>
                </div>
                <div class="carte-corp">
                    <p>Matériels de qualités </p>
                </div>
            </div>

            <div class="minicartes">
                <img class="img" src="../static/images/homeKeeper.png">
                <div class="carte-titre">
                    <h4 class="price">Devis adaptés à vos besoins</h4>
                </div>
                <div class="carte-corp">
                    <p>Selon les besoins et les budgets</p>
                </div>
            </div>
        </div>

    </div>
  </v-container>
       
       <div class="flex flex-wrap align-center justify-center  ">
        <div><img src="../static/images/image1.png" class="mx-auto" alt=""></div>
        <div><img src="../static/images/image2.png" class="mt-4" alt=""></div>

       </div>
       <v-card-title class="headline text-center bold mt-5 text-orange">ME CONTACTER</v-card-title>


       <div class="d-flex justify-center align-center  m-5 bg-indigo" style="">

        <v-form v-model="valid" ref="form" class="px-5 py-3 mx-auto" style="bg-gradient-to-r from-cyan-500 to-blue-500; border-radius: 10px; width: 500px;">
          <v-text-field
            label="Nom"
            v-model="formData.name"
          />
          <v-text-field
            label="Adresse email"
            v-model="formData.email"
          />
          <v-text-field
            label="Numéro de téléphone"
            v-model="formData.phone"
          />
          <v-textarea
            label="Question"
            v-model="formData.question"
          />
          <v-btn @click="sendEmail" color="primary">Envoyer</v-btn>
          <v-alert
          v-if="showAlert"
        :value="showAlert"
        type="success"
        transition="scale-transition"
        dismissible
        @input="showAlert = false"
        >  Le message a été envoyé avec succès!
      </v-alert>
        </v-form>
      </div>

       <div class="video">
        <iframe src="https://www.youtube.com/embed/qQRcIKJl_CQ"  allowfullscreen></iframe>
    </div>
      </v-content>
     
      <v-footer class="absolute " color="indigo" dark>
        <v-spacer></v-spacer>
  
        <p class="text-white">Tous droits réservés - © 2023 Copyright:</p>
  
        <v-spacer></v-spacer>
      </v-footer>
    </v-app>

  </template>
  <script>
 import emailjs from 'emailjs-com'

export default {
  data () {
    return {
      valid: false,
      formData: {
        name: '',
        email: '',
        phone: '',
        question: ''
      },
      showAlert: false
    }
  },
  methods: {
    sendEmail () {
      const serviceID = 'service_l9k0hsd'
      const templateID = 'template_0si08dw'
      const userID = '42PbJT9xe1NK5sCwh'
      try {
        emailjs.send(serviceID, templateID, this.formData, userID)
        this.formData = {
          name: '',
          email: '',
          phone: '',
          question: ''
        }
        this.showAlert = true
        // Hide v-alert after 3 seconds
        setTimeout(() => {
          this.showAlert = false
        }, 3000)
      } catch (err) {
        console.error(err)
        // Show error message
      }
    }
  }
}

</script>



<style>
@media (max-width: 600px) {
  .flex-row {
    flex-direction: column;
  }
}
.video iframe {
  border: none;
  border-radius: 10px;
  width: 100%;
  height: 400px;
  margin-bottom: 5px;
}
.bg-gradient-blue {
  background: linear-gradient(to right, #0f2027, #203a43, #2c5364);
  padding: 20px;
  border-radius: 10px;
}
/* Toutes les cartes */
.cartes {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 7%;
  margin-top: 7%;

}

.img:hover{
  color: #424242;
  -webkit-transition: all .3s ease-in;
  -moz-transition: all .3s ease-in;
  -ms-transition: all .3s ease-in;
  -o-transition: all .3s ease-in;
  transition: all .3s ease-in;
  opacity: 1;
  transform: scale(1.15);
  -ms-transform: scale(1.15); /* IE 9 */
  -webkit-transform: scale(1.15); /* Safari and Chrome */
}


.conteneurs {
  justify-content: center;

}

.cartes .minicartes {
  margin-right: 20px;
  cursor: pointer;

}

.cartes .minicartes img {
  height: 400px;
  width: 400px;
}

.cartes .minicartes .carte-titre {

  text-align: center;
}

.cartes .minicartes .carte-corp p {
  margin-top: -10px;
  text-align: center;
}

h4 {
  text-align: center;
}

/* Fin de toutes les cartes */
@media screen and (max-width: 640px) {
  nav .onglets .link, nav h1 img .logo {
      display: none;
  }

  .homeKeeper{
      height: 70%;
      width: 70%;
      height: 70%;
      width: 70%;
  }

  .logo{
      height: 70%;
      width: 70%;
  }
  .cartes .carte img {
      width: 300px;
  }
}
</style>
