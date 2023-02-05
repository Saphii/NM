<template>
    <div class="absolute w-full h-full">
      
      <video autoplay loop muted class="object-cover w-100 h-100">
        <source src="../static/video/Sanstitre.mp4" />
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
  