<script setup>
import socialProof from '../assets/data/socialProof.json'
console.log(socialProof)
</script>

<template>
  <section class="p-10 bg-[#ebeff9]">
    <h2 class="text-2xl font-semibold tracking-wide pb-10">
      Le voyage en <span class="text-[#2e8b57]">immersion</span>, le partage au coeur du voyage 🌍
    </h2>
    <p class="font-extralight text-sm leading-6">
      <q class="italic">{{ socialProof.blogPart[0].quote }}</q>
      {{ socialProof.blogPart[0].firstParagraph }}
    </p>
    <p class="py-4 font-extralight text-sm leading-6">
      {{ socialProof.blogPart[0].secondParagraph }}
    </p>
  </section>
</template>
