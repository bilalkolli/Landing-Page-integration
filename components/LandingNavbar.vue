<script setup>
import { ref } from 'vue'

const pages = ['Customer', 'Changelog', 'Help', 'Careers', 'Pricing']
const number = ref(4)

const showPopup = ref(true)
const showMenu = ref(false)

const closePopup = () => {
  showPopup.value = false
}

const toggleMenu = () => {
  showMenu.value = !showMenu.value
}
</script>

<template>
  <!-- Conteneur principal : flex-col-reverse à partir de 885px -->
  <LandingNavbarContainer class="flex flex-col-reverse custom:flex-col">
    
    <!-- Pop-up -->
    <div 
      v-if="showPopup" 
      class="flex justify-center items-center bg-base-600 text-white py-2.5 rounded-xl text-body-xs font-medium relative"
    >
      <span>We've raised a $23.5m Series A led by Redpoint Ventures!<NuxtLink class="underline underline-offset-4 text-body-xxs font-semibold">Read more</NuxtLink></span>
      <button @click="closePopup" class="absolute right-4">
        <NuxtImg src="/cross.svg" class="w-3 h-3 cursor-pointer" />
      </button>
    </div>

    <!-- Navbar -->
    <nav class="py-3.5">
      <div class="flex justify-between items-center">
        
        <!-- Logo + Liens de navigation -->
        <div class="flex items-center">
          <!-- Logo -->
          <NuxtImg src="/Logo.svg" width="100" height="40" class="mr-14 mt-1" />
          
          <!-- Navigation Desktop (Visible ≥ 885px) -->
          <div class="hidden custom:flex items-center">
            <NuxtLink 
              v-for="page in pages" 
              :key="page" 
              class="pr-6 hover:underline inline-flex items-center gap-1" 
              to="/"
            >
              {{ page }} 
              <span v-if="page === 'Careers'" class="bg-base-600 ml-0.5 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                {{ number }}
              </span>
            </NuxtLink>
          </div>
        </div>

        <!-- Boutons Desktop (Visible ≥ 885px) -->
        <div class="hidden custom:flex">
          <NuxtLink class="px-3 py-2 border rounded-xl mr-4">Sign in</NuxtLink>
          <NuxtLink class="py-2 px-4 text-white bg-base-600 border-base-400 rounded-xl">Start for free</NuxtLink>
        </div>

        <!-- Bouton d'ouverture du menu en mobile -->
        <button @click="toggleMenu" class="custom:hidden">
          <NuxtImg src="/menu.svg" class="w-6 h-6" />
        </button>
      </div>

      <!-- Menu Mobile (Affiché seulement au clic, ≤ 885px) -->
      <div 
        v-if="showMenu" 
        class="absolute right-0 top-16 bg-white shadow-lg rounded-lg w-64 p-4 flex flex-col gap-3 custom:hidden"
      >
        <NuxtLink 
          v-for="page in pages" 
          :key="page" 
          class="py-2 hover:underline text-base" 
          to="/"
        >
          {{ page }} 
          <span v-if="page === 'Careers'" class="bg-base-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
            {{ number }}
          </span>
        </NuxtLink>
        <hr class="my-2 border-gray-300">
        <NuxtLink class="px-3 py-2 border rounded-xl text-center">Sign in</NuxtLink>
        <NuxtLink class="py-2 px-4 text-white bg-base-600 border-base-400 rounded-xl text-center">Start for free</NuxtLink>
      </div>
    </nav>

  </LandingNavbarContainer>
</template>