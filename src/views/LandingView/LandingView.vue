<script setup lang="ts">
import { ROUTES } from '@/constants'
</script>

<template>
  <TemplateDefault class="landing-view">
    <h2>Admin Settings</h2>
    <Button variant="outline" as-child>
      <RouterLink :to="ROUTES.EXAM_VIEW.path"> Take Driving Exam </RouterLink>
    </Button>
    <span class="sr-only">landing-view </span>
  </TemplateDefault>
</template>
