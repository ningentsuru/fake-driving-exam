<script setup lang="ts"></script>

<template>
  <TemplateDefault class="landing-view">
    <div v-for="num in 100" :key="num">Hello World!</div>
    <span class="sr-only">landing-view </span>
  </TemplateDefault>
</template>
