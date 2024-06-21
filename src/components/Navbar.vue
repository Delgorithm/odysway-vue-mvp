<script setup>
import { ref } from 'vue'
const displayModal = ref(false)
</script>

<template>
  <nav class="flex justify-between items-center p-2 mx-4">
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
      <img src="../assets/Img/51ba6665-d97a-4173-ba49-c9557b013e45.svg" alt="Menu" class="w-6" />
    </section>
  </nav>

  <div
    v-if="displayModal"
    class="fixed h-full w-screen bg-slate-700/50 top-0 right-0 flex justify-center items-center"
  >
    <section class="fixed h-44 w-11/12 bg-white rounded-xl">
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
          placeholder="Rechercher uen destination"
          class="py-3 px-20 bg-gray-300/20 border rounded-3xl my-10"
        />
        <div class="flex">
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
    </section>
  </div>
</template>
