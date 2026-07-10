<script setup lang="ts">
interface Props {
  modelValue: boolean
  message: string
  category: string
  scoreVariant: 'default' | 'secondary' | 'destructive'
  score: number
  totalAnswered: number
  scorePercentage: number
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: false,
  message: '',
  category: '',
  scoreVariant: 'default',
  score: 0,
  totalAnswered: 0,
  scorePercentage: 0,
})

const emit = defineEmits<{
  'update:modelValue': [value: boolean]
  'try-again': []
}>()

const handleClose = (value: boolean) => {
  emit('update:modelValue', value)
}

const handleTryAgainClick = () => {
  emit('try-again')
}
</script>

<template>
  <Drawer :open="props.modelValue" @update:open="handleClose">
    <DrawerContent class="sm:mx-auto sm:max-w-md">
      <DrawerHeader class="text-center">
        <DrawerTitle class="text-2xl font-bold">
          {{ props.message }}
        </DrawerTitle>
        <DrawerDescription class="mt-2 text-lg">
          You completed the {{ props.category === 'all' ? 'Full' : props.category }} Quiz
        </DrawerDescription>
      </DrawerHeader>

      <div class="flex flex-col items-center justify-center gap-6 py-6">
        <div class="flex items-center gap-6">
          <div class="text-center">
            <span class="text-muted-foreground text-sm font-medium tracking-wider uppercase">
              Score
            </span>
            <div class="mt-1 text-5xl font-extrabold">
              {{ props.score
              }}<span class="text-muted-foreground text-2xl">/{{ props.totalAnswered }}</span>
            </div>
          </div>

          <div class="bg-border h-12 w-px"></div>

          <div class="text-center">
            <span class="text-muted-foreground text-sm font-medium tracking-wider uppercase">
              Accuracy
            </span>
            <div class="mt-1">
              <Badge :variant="props.scoreVariant" class="h-auto px-4 py-1 text-xl">
                {{ props.scorePercentage }}%
              </Badge>
            </div>
          </div>
        </div>
      </div>

      <DrawerFooter class="flex flex-col gap-3 border-t pt-4 sm:flex-row">
        <Button variant="outline" @click="handleTryAgainClick" class="w-full cursor-pointer">
          Try Again (Shuffle)
        </Button>
      </DrawerFooter>
    </DrawerContent>
    <span class="sr-only">molecule-score-drawer</span>
  </Drawer>
</template>
