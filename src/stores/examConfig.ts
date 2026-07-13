import { ref } from 'vue'
import { defineStore } from 'pinia'

export type ExamCategoryValue =
  | 'all'
  | 'Road Signs'
  | 'Traffic Rules'
  | 'Penalties'
  | 'Defensive Driving'
  | 'General & Republic Acts'

export const useExamConfigStore = defineStore('examConfig', () => {
  const examLength = ref<number>(5)
  const examCategory = ref<ExamCategoryValue>('all')

  function setExamLength(value: number) {
    examLength.value = value
  }

  function setExamCategory(value: ExamCategoryValue) {
    examCategory.value = value
  }

  return { examLength, examCategory, setExamLength, setExamCategory }
})
