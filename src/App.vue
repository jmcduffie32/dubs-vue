<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="container mx-auto">
    <nav class="flex flex-row justify-center">
      <RouterLink class="mx-2 underline hover:text-blue-100" active-class="text-blue-500" to="/"
        >Home</RouterLink
      >
      <RouterLink
        class="mx-2 underline hover:text-blue-100"
        active-class="text-blue-500"
        to="/events"
        >Events</RouterLink
      >
      <RouterLink
        class="mx-2 underline hover:text-blue-100"
        active-class="text-blue-500"
        to="/setup"
        >Setup</RouterLink
      >
      <RouterLink
        class="mx-2 underline hover:text-blue-100"
        active-class="text-blue-500"
        to="/players"
        >Players</RouterLink
      >
      <RouterLink
        class="mx-2 underline hover:text-blue-100"
        active-class="text-blue-500"
        to="/teams"
        >Teams</RouterLink
      >
      <RouterLink
        class="mx-2 underline hover:text-blue-100"
        active-class="text-blue-500"
        to="/payout"
        >Payout</RouterLink
      >
      <RouterLink
        class="mx-2 underline hover:text-blue-100"
        active-class="text-blue-500"
        to="/about"
        >About</RouterLink
      >
    </nav>
  </header>

  <RouterView class="container mx-auto" />
</template>

<style scoped></style>
