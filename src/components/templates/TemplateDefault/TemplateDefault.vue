<script setup lang="ts"></script>

<template>
  <div class="template-default">
    <OrganismHeader />
    <main v-bind="$attrs"><slot /></main>
    <OrganismFooter />
    <span class="sr-only">template-default</span>
  </div>
</template>
