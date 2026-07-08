<script setup lang="ts">
interface Props {
  src: string
  alt: string
  height?: number
  width?: number
}

const props = withDefaults(defineProps<Props>(), {
  src: '',
  alt: '',
  height: 0,
  width: 0,
})

const imgSrc = ref<string>('')
const isLoaded = ref(false)
const imgRef = ref<HTMLImageElement | null>(null)

let observer: IntersectionObserver | null = null

onMounted(() => {
  if (!imgRef.value) return

  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          imgSrc.value = props.src
          if (observer) observer.unobserve(entry.target)
        }
      })
    },
    { rootMargin: '50px' },
  )

  observer.observe(imgRef.value)
})

onBeforeUnmount(() => {
  if (observer) observer.disconnect()
})
</script>

<template>
  <div class="relative overflow-hidden" :style="{ aspectRatio: width / height }">
    <div v-if="!isLoaded" class="bg-muted absolute inset-0 animate-pulse" />

    <img
      ref="imgRef"
      :src="imgSrc"
      :alt="alt"
      :width="width"
      :height="height"
      @load="isLoaded = true"
      class="h-full w-full object-contain transition-opacity duration-500"
      :class="{ 'opacity-100': isLoaded, 'opacity-0': !isLoaded }"
    />
    <span class="sr-only">atom-lazy-image</span>
  </div>
</template>
