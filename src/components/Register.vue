<script setup>
import { reactive } from 'vue'
import { supabase } from '../lib/supabaseClient.js'

const state = reactive({
  email: '',
  password: '',
  confirmPassword: '',
  firstname: '',
  lastname: ''
})

const register = async () => {
  const { data, error } = await supabase.auth.signUp({
    email: state.email,
    password: state.password,
    confirmPassword: state.confirmPassword,
    firstname: state.firstname,
    lastname: state.lastname
  })
  if (error) {
    console.log(error.message)
    alert(error.message)
  }
}
</script>

<template>
  <form
    id="authentification"
    action="#"
    method="POST"
    class="flex flex-col justify-center items-center gap-5 w-full overflow-hidden"
  >
    <p
      class="border py-1.5 px-12 mt-12 flex justify-center w-full rounded-md shadow-md font-medium hover:bg-slate-300"
    >
      S'inscrire avec Google
    </p>
    <div class="flex justify-around w-full items-center px-10">
      <div class="w-20 h-0.5 bg-gray-200"></div>
      <p class="text-gray-400">Ou</p>
      <div class="w-20 h-0.5 bg-gray-200"></div>
    </div>
    <label for="email" class="hidden">Prénom</label>
    <input
      id="firstname"
      type="firstname"
      name="firstname"
      placeholder="Prénom"
      class="border py-1.5 pl-2 px-24 rounded-md"
      v-model="state.firstname"
    />
    <label for="email" class="hidden">Nom</label>
    <input
      id="lastname"
      type="lastname"
      name="lastname"
      placeholder="Nom"
      class="border py-1.5 pl-2 px-24 rounded-md"
      v-model="state.lastname"
    />
    <label for="email" class="hidden">Email</label>
    <input
      id="email"
      type="email"
      name="email"
      placeholder="Email"
      class="border py-1.5 pl-2 px-24 rounded-md"
      v-model="state.email"
    />

    <label for="password" class="hidden">Password</label>
    <input
      id="password"
      type="password"
      name="password"
      placeholder="Mot de passe"
      class="border py-1.5 pl-2 px-24 rounded-md"
      v-model="state.password"
    />
    <label for="password" class="hidden">Password</label>
    <input
      id="password"
      type="password"
      name="password"
      placeholder="Confirmation de mot de passe"
      class="border py-1.5 pl-2 px-24 rounded-md"
      v-model="state.confirmPassword"
    />
    <div class="flex items-center gap-2">
      <input type="checkbox" />
      <p>Je souhaite recevoir des insiprations et des idées pour voyager autrement</p>
    </div>
    <div class="flex flex-col text-end">
      <p class="text-[#2e8b57] font-light underline">Mot de passe oublié ?</p>
      <div class="flex items-center justify-center gap-5 mt-5">
        <button
          @click="register"
          type="button"
          class="mt-4 py-2 px-3 bg-slate-300 uppercase rounded-md hover:opacity-80"
        >
          Inscription
        </button>
      </div>
    </div>
  </form>
</template>
