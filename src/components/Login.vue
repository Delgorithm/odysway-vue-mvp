<script setup>
import { reactive } from 'vue'
import { supabase } from '../lib/supabaseClient.js'

const state = reactive({
  email: '',
  password: ''
})

const login = async () => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: state.email,
    password: state.password
  })
  if (error) {
    console.log(error.message)
    alert(error.message)
  }

  if (login) {
    console.log('Vous êtes bien connecté', login.email)
    alert('Vous êtes bien connecté', login.email)
  }
}
</script>

<template>
  <form
    id="authentification"
    action="#"
    method="POST"
    class="flex flex-col justify-center items-center gap-5 w-full"
  >
    <button
      class="border py-1.5 px-12 my-10 flex justify-center w-full rounded-md shadow-md font-medium hover:bg-slate-300"
      @click="setActivateState('first')"
    >
      Se connecter avec Google
    </button>
    <div class="flex justify-around w-full items-center px-10">
      <div class="w-20 h-0.5 bg-gray-200"></div>
      <p class="text-gray-400">Ou</p>
      <div class="w-20 h-0.5 bg-gray-200"></div>
    </div>

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
    <div class="flex flex-col text-end">
      <p class="text-[#2e8b57] font-light underline">Mot de passe oublié ?</p>
      <button
        @click="login"
        type="button"
        class="mt-4 py-2 px-3 bg-slate-300 uppercase rounded-md hover:opacity-80"
      >
        Connexion
      </button>
    </div>
  </form>
</template>
