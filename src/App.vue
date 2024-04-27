<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<!-- Template -->
<template>
  <header>
    <div>
      <nav>
        <RouterLink to="/">Home</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<!-- Styles -->
<style scoped>
*{
  border: #232323 0.5px dashed;
}
</style>
