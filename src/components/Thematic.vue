<script setup>
import slider from '../assets/data/slider.json'
import holidayCarroussel from '../assets/data/holidayCarroussel.json'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
</script>

<template>
  <section class="">
    <h2 class="text-2xl font-semibold mx-4 my-14">
      Nos thématiques <br /><span class="text-[#2e8b57]">préférées</span>🫶
    </h2>
    <section class="flex items-center w-full overflow-hidden bg-blue-500">
      <article v-for="item in slider.activities" :key="item.id">
        <img :src="`/src/assets/Img/${item.url}`" :alt="item.alt" class="w-full h-auto" />
      </article>
    </section>
    <section class="my-4 mx-10 py-12">
      <h2 class="text-2xl font-semibold text-left">
        Nos séjours en <span class="text-[#2e8b57]">France 🚞</span>
      </h2>
      <Swiper>
        <SwiperSlide v-for="item in holidayCarroussel.firstActivities" :key="item.id">
          <img :src="`/src/assets/Img/${item.url}`" :alt="item.alt" class="rounded-xl mt-12" />
          <p class="py-2">
            <span class="font-semibold text-[#2e8b57]">{{ item.location }}</span>
            <span class="font-semibold text-[#bc5948] pl-2">{{ item.duration }}</span>
          </p>
          <h2>{{ item.title }}</h2>
          <p class="font-thin">
            À partir de <span class="font-semibold">{{ item.pricing }}</span>
          </p>
        </SwiperSlide>
      </Swiper>
    </section>
    <section class="my-4 mx-10 py-12">
      <h2 class="text-2xl font-semibold text-left">
        Nos départs en petits groupes <span class="text-[#2e8b57]">garantis ✓</span>
      </h2>
      <Swiper>
        <SwiperSlide v-for="item in holidayCarroussel.secondActivities" :key="item.id">
          <img :src="`/src/assets/Img/${item.url}`" :alt="item.alt" class="rounded-lg mt-12" />
          <p class="py-2">
            <span class="font-semibold text-[#2e8b57]">{{ item.location }}</span>
            <span class="font-semibold text-[#bc5948] pl-2">{{ item.duration }}</span>
          </p>
          <h2>{{ item.title }}</h2>
          <p class="font-thin">
            À partir de <span class="font-semibold">{{ item.pricing }}</span>
          </p>
        </SwiperSlide>
      </Swiper>
    </section>
  </section>
</template>
