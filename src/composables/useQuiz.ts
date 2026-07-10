import type { QuizQuestion } from '@/types'
import staticData from '@/data/exam.json'

function getFullyRandomizedQuiz(quizQuestions: QuizQuestion[]): QuizQuestion[] {
  const questions = [...quizQuestions].sort(() => Math.random() - 0.5)

  return questions.map((q) => {
    const optionsWithStatus = q.options.map((opt, index) => ({
      text: opt,
      isCorrect: String.fromCharCode(65 + index) === q.correctAnswer,
    }))

    const shuffledOptions = optionsWithStatus.sort(() => Math.random() - 0.5)

    return {
      ...q,
      options: shuffledOptions.map((o) => o.text),
      correctAnswer: String.fromCharCode(65 + shuffledOptions.findIndex((o) => o.isCorrect)),
    }
  })
}

export function useQuiz() {
  const allQuestions = ref<QuizQuestion[]>([])
  const selectedCategory = ref<string>('all')
  const userAnswers = ref<Record<number, string[]>>({})
  const questionLimit = ref<number | null>(10)

  const filteredQuestions = computed(() => {
    let questions = allQuestions.value

    if (selectedCategory.value !== 'all') {
      questions = questions.filter((q) => q.category === selectedCategory.value)
    }

    if (questionLimit.value !== null && questions.length > questionLimit.value) {
      questions = questions.slice(0, questionLimit.value)
    }

    return questions
  })

  const score = computed(() => {
    const answeredIds = Object.keys(userAnswers.value)
    if (answeredIds.length === 0) return 0

    let correctCount = 0
    answeredIds.forEach((id) => {
      const answerPair = userAnswers.value[Number(id)]
      if (!answerPair) return
      const [selected, correct] = answerPair
      if (selected === correct) correctCount++
    })

    return correctCount
  })

  const totalAnswered = computed(() => Object.keys(userAnswers.value).length)

  const scorePercentage = computed(() => {
    if (totalAnswered.value === 0) return 0
    return Math.round((score.value / totalAnswered.value) * 100)
  })

  const isQuizFinished = computed(() => {
    return totalAnswered.value > 0 && totalAnswered.value === filteredQuestions.value.length
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
    allQuestions.value = getFullyRandomizedQuiz(staticData as QuizQuestion[])
    userAnswers.value = {}
  }

  onMounted(() => {
    allQuestions.value = getFullyRandomizedQuiz(staticData as QuizQuestion[])
  })

  return {
    allQuestions,
    selectedCategory,
    userAnswers,
    filteredQuestions,
    handleAnswer,
    getOptionStatus,
    resetQuiz,
    score,
    totalAnswered,
    scorePercentage,
    isQuizFinished,
    questionLimit,
  }
}
