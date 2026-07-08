<script setup lang="ts">
import { ROUTES } from '@/constants'
</script>

<template>
  <header class="organism-header">
    <div class="mx-auto flex w-full max-w-360 justify-between items-center">
      <h1><RouterLink :to="ROUTES.LANDING_VIEW.path">Fake-Driving-Exam</RouterLink></h1>
      <AtomThemeToggle />
      <span class="sr-only">organism-header</span>
    </div>
  </header>
</template>
