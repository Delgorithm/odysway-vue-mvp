<script setup>
import data from '../assets/data/data.json'
</script>

<template>
  <section
    class="bg-[url('../assets/Img/OOzgsubRRRiMprrkTtng-min.jpeg')] bg-no-repeat bg-origin-padding bg-right-bottom bg-content min-h-[55vh]"
  >
    <h1 class="text-6xl text-white shadow-sm text-left pt-20">{{ data.heroTitle }}</h1>
  </section>
  <section class="p-16 bg-[#f4f2eb]">
    <article>
      <h2 class="text-2xl font-semibold py-6">
        Une agence fiable sur qui vous pouvez <span class="text-[#bc5948]">compter</span>
      </h2>
      <p class="font-light tracking-wide py-6">{{ data.heroFirstParagraph }}</p>
    </article>

    <article>
      <h2 class="text-2xl font-semibold py-6">
        Des voyages <span class="text-[#bc5948]">immersifs</span> qui ont du
        <span class="text-[#bc5948]">sens</span>
      </h2>
      <p class="font-light tracking-wide py-6">{{ data.heroSecondParagraph }}</p>
    </article>

    <article>
      <h2 class="text-2xl font-semibold py-6">
        Des départs en <span class="text-[#bc5948]">petits groupes</span> ou
        <span class="text-[#bc5948]">sur-mesure</span>
      </h2>
      <p class="font-light tracking-wide py-6">{{ data.heroThirdParagraph }}</p>
    </article>
  </section>
</template>
