<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<!-- Template -->
<template>
  <header>
    <div>
      <nav class="flex gap-2 justify-center p-4 border-b-2 border-b-red-600">
        <RouterLink class="bg-gray-950 text-gray-50 p-1 border-red-500 border-solid border-2" to="/">Home</RouterLink>
        <RouterLink class="bg-gray-950 text-gray-50 p-1 border-red-500 border-solid border-2" to="/history">History</RouterLink>
      </nav>
    </div>
  </header>
  <main>
    <h1 class="text-4xl text-center font-pokemon font-bold p-4 mt-2">POKéMON VIEWER</h1>
    <div>
    </div>
    <RouterView />
  </main>
</template>

<!-- Styles -->
<style scoped>
</style>
