<script setup lang="ts"></script>

<template>
  <div class="template-default">
    <OrganismHeader />
    <main v-bind="$attrs" class="mx-auto max-w-360 p-5"><slot /></main>
    <span class="sr-only">template-default</span>
  </div>
</template>
