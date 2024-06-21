<script setup>
import newsletter from '../assets/data/newsletter.json'
</script>

<template>
  <section class="bg-[#2e8b57] py-10 px-2">
    <h2 class="text-3xl text-center text-white">{{ newsletter.title }}</h2>
    <form
      id="newsletter"
      @submit="checkForm"
      action="https://vuejs.org/"
      method="POST"
      class="flex justify-center pt-8"
    >
      <label for="email" class="hidden">Email</label>
      <input
        id="email"
        type="email"
        v-model="email"
        name="email"
        placeholder="Votre adresse email"
        class="py-2 px-5 rounded-3xl"
      />
    </form>
  </section>
</template>
