import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useExamStore = defineStore('exam', () => {
  const exam = ref<string>('')

  function setExam(module: string) {
    exam.value = module
  }

  return { exam, setExam }
})
