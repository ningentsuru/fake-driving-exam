import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useExamConfigStore = defineStore('examConfig', () => {
  const examLength = ref<number>(5)
  const examCategory = ref<string>('all')

  function setExamLength(module: number) {
    examLength.value = module
  }

  function setExamCategory(module: string) {
    examCategory.value = module
  }

  return { examLength, examCategory, setExamLength, setExamCategory }
})
