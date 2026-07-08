<script setup lang="ts">
import { useQuiz } from '@/composables/useQuiz'
import { useQuizSpeech } from '@/composables/useQuizSpeech'

const {
  selectedCategory,
  filteredQuestions,
  userAnswers,
  handleAnswer,
  getOptionStatus,
  resetQuiz,
} = useQuiz()

const { speakingIndex, speakQuestion, stopSpeaking } = useQuizSpeech()

onBeforeUnmount(stopSpeaking)
</script>

<template>
  <div class="organism-quiz">
    <MoleculeQuizHeader v-model="selectedCategory" />

    <MoleculeQuestionItem
      :questions="filteredQuestions"
      :user-answers="userAnswers"
      :speaking-index="speakingIndex"
      :speak-question="speakQuestion"
      :handle-answer="handleAnswer"
      :get-option-status="getOptionStatus"
      @clear-answer="delete userAnswers[$event]"
    />

    <div class="mt-8 text-center">
      <Button variant="outline" class="cursor-pointer" @click="resetQuiz">
        Shuffle & Reset Quiz
      </Button>
    </div>

    <span class="sr-only">organism-quiz</span>
  </div>
</template>
