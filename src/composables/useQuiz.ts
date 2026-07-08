import { getFullyRandomizedQuiz } from '@/data/quizData'
import type { QuizQuestion } from '@/data/quizData'

export function useQuiz() {
  const allQuestions = ref<QuizQuestion[]>([])
  const selectedCategory = ref<string>('all')
  const userAnswers = ref<Record<number, string[]>>({})

  const filteredQuestions = computed(() => {
    if (selectedCategory.value === 'all') {
      return allQuestions.value
    }
    return allQuestions.value.filter((q) => q.category === selectedCategory.value)
  })

  const handleAnswer = (id: number, selected: string, correct: string) => {
    if (userAnswers.value[id]) return

    userAnswers.value[id] = [selected, correct]
  }

  const getOptionStatus = (id: number, idx: number, correct: string) => {
    const userAnswer = userAnswers.value[id]?.[0]
    if (!userAnswer) return 'default'

    const selectedLetter = String.fromCharCode(65 + idx)

    if (selectedLetter === correct) return 'correct'
    if (selectedLetter === userAnswer && selectedLetter !== correct) return 'wrong'

    return 'default'
  }

  const resetQuiz = () => {
    allQuestions.value = getFullyRandomizedQuiz()
    userAnswers.value = {}
  }

  onMounted(() => {
    allQuestions.value = getFullyRandomizedQuiz()
  })

  return {
    allQuestions,
    selectedCategory,
    userAnswers,
    filteredQuestions,
    handleAnswer,
    getOptionStatus,
    resetQuiz,
  }
}
