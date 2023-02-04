<template>
    <div class="absolute w-full h-full">
      
      <video autoplay loop muted class="object-cover w-full h-full">
        <source src="../static/video/Sans titre.mp4" type="video/webm" />
      </video>
      
      <div class="  rounded absolute text-center inset-0 flex flex-col items-center justify-center opacity-75">
<img src="../static/images/logo-removebg-preview.png" class=" rounded-full w-80 " alt="">  
        <nuxt-link to="/mainpage">
        <button class="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded mt-16">
          Rentrer sur le site
        </button>
    </nuxt-link>
      </div>
    </div>
  </template>
  