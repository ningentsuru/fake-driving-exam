<script setup lang="ts">
interface Props {
  modelValue: string
}
const props = withDefaults(defineProps<Props>(), {
  modelValue: '',
})

const emit = defineEmits(['update:modelValue'])
</script>

<template>
  <div
    class="molecule-quiz-header mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
  >
    <h2 class="text-2xl font-bold tracking-tight">Driving Theory Quiz</h2>

    <Select :model-value="props.modelValue" @update:model-value="emit('update:modelValue', $event)">
      <SelectTrigger class="w-50">
        <SelectValue placeholder="Select Category" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="all">All Categories</SelectItem>
        <SelectItem value="Road Signs">Road Signs</SelectItem>
        <SelectItem value="Traffic Rules">Traffic Rules</SelectItem>
        <SelectItem value="Penalties">Penalties</SelectItem>
        <SelectItem value="Defensive Driving">Defensive Driving</SelectItem>
        <SelectItem value="General & Republic Acts">General & Republic Acts</SelectItem>
      </SelectContent>
    </Select>
    <span class="sr-only">molecule-quiz-header</span>
  </div>
</template>
