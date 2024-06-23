<script setup>
import { ref } from 'vue'
import socialProof from '../assets/data/socialProof.json'

const activeState = ref(null)

function setActivateState(state) {
  activeState.value = activeState.value === state ? null : state
}
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
  <section class="p-10">
    <h2 class="text-2xl font-semibold mx-2 text-center">
      <span class="text-[#2e8b57]">Les mots</span> de nos voyageurs 😍
    </h2>
    <article>
      <div v-if="activeState === 'first'">
        <p class="px-5 py-10 text-center">
          {{ socialProof.quoteTravelers[0].firstTraveler.firstQuote }}
        </p>
        <div class="flex justify-around gap-5">
          <img
            src="../assets/Img/OOzgsubRRRiMprrkTtng-min.jpeg"
            alt="Berger dans les Pyrénées"
            class="w-32 h-36 rounded-[3rem] p-1 bg-pink-200"
          />
          <div>
            <p class="text-xs">{{ socialProof.quoteTravelers[0].firstTraveler.details }}</p>
            <p class="font-semibold tracking-wide">
              {{ socialProof.quoteTravelers[0].firstTraveler.secondQuote }}
            </p>
          </div>
        </div>
      </div>
      <div v-if="activeState === 'second'">
        <p class="px-5 py-10 text-center">
          {{ socialProof.quoteTravelers[0].secondTraveler.firstQuote }}
        </p>
        <div class="flex justify-around gap-5">
          <img
            src="../assets/Img/EGNwnNRnTMCEuTq6bj45-min.jpeg"
            alt="Berger dans les Pyrénées"
            class="w-32 h-36 rounded-[3rem] p-1 bg-pink-200"
          />
          <div>
            <p class="text-xs">{{ socialProof.quoteTravelers[0].secondTraveler.details }}</p>
            <p class="font-semibold tracking-wide">
              {{ socialProof.quoteTravelers[0].secondTraveler.secondQuote }}
            </p>
          </div>
        </div>
      </div>
      <div v-if="activeState === 'third'">
        <p class="px-5 py-10 text-center">
          {{ socialProof.quoteTravelers[0].firstTraveler.firstQuote }}
        </p>
        <div class="flex justify-around gap-5">
          <img
            src="../assets/Img/aUfx5rXLQqiRHbypIpXN-min.jpeg"
            alt="Berger dans les Pyrénées"
            class="w-32 h-36 rounded-[3rem] p-1 bg-pink-200"
          />
          <div>
            <p class="text-xs">{{ socialProof.quoteTravelers[0].thirdTraveler.details }}</p>
            <p class="font-semibold tracking-wide">
              {{ socialProof.quoteTravelers[0].thirdTraveler.secondQuote }}
            </p>
          </div>
        </div>
      </div>
      <div class="flex justify-between pt-10">
        <img
          src="../assets/Img/hI3cO2QQYiahepsX3hwa-min.jpeg"
          alt="First traveller"
          class="size-16 rounded-full {{ activateState === 'first' ? 'p-2 bg-[#2e8b57]' : null }}"
          @click="setActivateState('first')"
        />
        <img
          src="../assets/Img/PuvPCEcEQvaKNOaJNxHY-min.jpeg"
          alt="Second traveller"
          class="size-16 rounded-full"
          @click="setActivateState('second')"
        />
        <img
          src="../assets/Img/XWtj7pZvTa6Gfwq1uGGn-min.jpeg"
          alt="Third traveller"
          class="size-16 rounded-full"
          @click="setActivateState('third')"
        />
      </div>
    </article>
  </section>
</template>
