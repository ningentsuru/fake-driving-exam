<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { useExam } from '@/composables/useExam'
import { useExamSpeech } from '@/composables/useExamSpeech'
import { useExamConfigStore } from '@/stores/examConfig'

const store = useExamConfigStore()
const examLength = computed(() => store.examLength)

const {
  filteredQuestions,
  userAnswers,
  handleAnswer,
  getOptionStatus,
  resetQuiz,
  score,
  totalAnswered,
  scorePercentage,
  isQuizFinished,
  questionLimit,
} = useExam()

const { speakingIndex, speakQuestion } = useExamSpeech()

const showResultDrawer = ref(false)

watch(isQuizFinished, (finished) => {
  if (finished) {
    showResultDrawer.value = true
  }
})

const scoreVariant = computed(() => {
  if (scorePercentage.value >= 80) return 'default'
  if (scorePercentage.value >= 50) return 'secondary'
  return 'destructive'
})

const scoreMessage = computed(() => {
  if (scorePercentage.value === 100) return 'Perfect Score! 🏆'
  if (scorePercentage.value >= 80) return 'Great Job! 🎉'
  if (scorePercentage.value >= 50) return 'Good Effort! 👍'
  return 'Keep Practicing! 📚'
})

const handleTryAgain = () => {
  showResultDrawer.value = false
  setTimeout(() => resetQuiz(), 300)
}

onMounted(() => {
  questionLimit.value = examLength.value
})
</script>

<template>
  <div class="organism-quiz">
    <MoleculeQuestionItem
      :questions="filteredQuestions"
      :user-answers="userAnswers"
      :speaking-index="speakingIndex"
      :speak-question="speakQuestion"
      :handle-answer="handleAnswer"
      :get-option-status="getOptionStatus"
      @clear-answer="delete userAnswers[$event]"
    />

    <Button
      v-if="isQuizFinished"
      variant="outline"
      @click="showResultDrawer = true"
      class="mt-4 w-full cursor-pointer"
    >
      Check again your score
    </Button>

    <MoleculeScoreDrawer
      v-model="showResultDrawer"
      :message="scoreMessage"
      :score="score"
      :total-answered="totalAnswered"
      :score-percentage="scorePercentage"
      :score-variant="scoreVariant"
      @try-again="handleTryAgain"
    />

    <span class="sr-only">organism-quiz</span>
  </div>
</template>
