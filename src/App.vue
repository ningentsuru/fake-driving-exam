<script setup lang="ts">
import { usePlatform } from '@/composables/usePlatform'
import { setupStatusBar } from '@/composables/useStatusBar'

const { isMobile, platform } = usePlatform()

onMounted(async () => {
  if (isMobile) {
    await setupStatusBar()
  }
  document.documentElement.classList.add(`platform-${platform}`)
})
</script>

<template>
  <router-view />
</template>
