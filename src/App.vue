<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<!-- Template -->
<template>
  <header class="flex flex-col xsm:flex-row justify-center items-center">
    <h1
      class="text-rose-600 text-4xl text-center font-pokemon font-bold p-4 mt-2"
    >
      POKéMON VIEWER
    </h1>
    <div class="flex items-center">
      <nav class="flex gap-2 justify-center p-4">
        <RouterLink
          class="bg-gray-950 text-gray-50 border-rose-500 hover:text-rose-500 border-solid border-2 p-2"
          to="/"
          >Viewer</RouterLink
        >
        <RouterLink
          class="bg-gray-950 text-gray-50 border-rose-500 hover:text-rose-500 border-solid border-2 p-2"
          to="/history"
          >History</RouterLink
        >
      </nav>
    </div>
  </header>
  <main>
    <RouterView />
  </main>
</template>
