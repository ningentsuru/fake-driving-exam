<script setup lang="ts">
import { usePlatform } from '@/composables/usePlatform'
import { setupStatusBar } from '@/composables/useStatusBar'
import { useBackButton } from '@/composables/useBackButton'

const { isMobile, platform } = usePlatform()

onMounted(() => {
  if (isMobile) {
    setupStatusBar()
    useBackButton()
  }
  document.documentElement.classList.add(`platform-${platform}`)
})
</script>

<template>
  <router-view />
</template>
