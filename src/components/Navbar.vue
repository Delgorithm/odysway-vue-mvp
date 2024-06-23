<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
const displayModal = ref(false)
const displayMenu = ref(false)
const isFixed = ref(false)

function handleScroll() {
  isFixed.value = window.scrollY > 0
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.addEventListener('scroll', handleScroll)
})
</script>

<template>
  <header
    :class="{
      'bg-white scale-105': isFixed,
      'bg-[#2e8b57] transition-all duration-500 ease-in-out': !isFixed,
      'fixed top-0 left-0 w-full transition-all duration-500 ease-in-out': isFixed
    }"
  >
    <nav class="flex justify-between items-center p-2 mx-4 bg-transparent">
      <a href="/">
        <img src="../assets/Img/logo_couleur-min.png" alt="Odysway's logo" class="w-32" />
      </a>
      <section class="flex gap-6">
        <img
          src="../assets/Img/bf25558b-2a5d-43a2-9e75-2eff32be2ce8.svg"
          alt="Searchbar"
          class="w-6 hover:rounded-xl hover:bg-gray-100"
          @click="displayModal = !displayModal"
        />

        <a href="/registration" class="w-6 hover:rounded-xl hover:bg-gray-100">
          <img src="../assets/Img/048756c9-5947-4b56-8420-5d31d0957cfb.svg" alt="My account" />
        </a>
        <img
          src="../assets/Img/51ba6665-d97a-4173-ba49-c9557b013e45.svg"
          alt="Menu"
          class="w-6"
          @click="displayMenu = !displayMenu"
        />
      </section>
    </nav>
  </header>

  <section
    v-if="displayModal"
    class="fixed h-full w-screen bg-slate-700/50 top-0 right-0 flex justify-center items-center"
  >
    <article class="fixed h-44 w-11/12 bg-white rounded-xl">
      <form
        id="search"
        @submit="search"
        action="https://vuesjs.org/"
        method="POST"
        class="flex flex-col justify-center items-center"
      >
        <label for="search" class="hidden">Search</label>
        <input
          id="search"
          type="text"
          v-model="search"
          name="search"
          placeholder="Rechercher une destination"
          class="py-3 px-20 bg-gray-300/20 border rounded-3xl my-10"
        />
        <div class="flex gap-2">
          <button
            class="bg-gray-200 text-black uppercase py-2 px-4 rounded-3xl"
            @click="displayModal = !displayModal"
          >
            Fermer
          </button>
          <button class="bg-[#2e8b57] text-white uppercase py-2 px-4 rounded-3xl">
            Rechercher
          </button>
        </div>
      </form>
    </article>
  </section>
  <section v-if="displayMenu" class="fixed h-full w-8/12 top-0 right-0 shadow-2xl bg-white">
    <ul class="flex flex-col gap-5 p-3 pt-5 text-[#2e8b57]">
      <li class="hover:bg-slate-100 p-2"><a href="#">Nos destinations</a></li>
      <li class="hover:bg-slate-100 p-2"><a href="#">Prochains départs</a></li>
      <li class="hover:bg-slate-100 p-2"><a href="#">Prendre RDV avec un conseille</a></li>
      <li class="hover:bg-slate-100 p-2"><a href="#">À propos</a></li>
      <li class="hover:bg-slate-100 p-2"><a href="#">Carte cadeau</a></li>
    </ul>
    <div class="fixed h-full w-4/12 top-0 left-0" @click="displayMenu = !displayMenu"></div>
  </section>
</template>
