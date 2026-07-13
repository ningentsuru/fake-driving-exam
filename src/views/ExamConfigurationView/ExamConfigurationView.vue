<script setup lang="ts">
import { useExamConfigStore, type ExamCategoryValue } from '@/stores/examConfig'

const store = useExamConfigStore()
const examLength = computed(() => store.examLength)
const examCategory = computed(() => store.examCategory)

const categories = [
  { value: 'all', label: 'All Categories' },
  { value: 'Road Signs', label: 'Road Signs' },
  { value: 'Traffic Rules', label: 'Traffic Rules' },
  { value: 'Penalties', label: 'Penalties' },
  { value: 'Defensive Driving', label: 'Defensive Driving' },
  { value: 'General & Republic Acts', label: 'General & Republic Acts' },
] as const

const handleSubmit = (values: { examLength: number; examCategory: string }) => {
  store.setExamLength(values.examLength)
  store.setExamCategory(values.examCategory as ExamCategoryValue)
}
</script>

<template>
  <TemplateDefault class="exam-configuration-view">
    <h2 class="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      Exam configuration
    </h2>

    <OrganismExamConfigurationForm
      :categories="categories"
      :exam-length="examLength"
      :exam-category="examCategory"
      @handle-submit="handleSubmit"
    />
    <span class="sr-only">exam-configuration-view</span>
  </TemplateDefault>
</template>
