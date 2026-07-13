<script setup lang="ts">
import type { ExamCategory, ExamQuestion } from '@/types'
import { Square, Volume2 } from '@lucide/vue'

interface Props {
  questions: ExamQuestion[]
  userAnswers: Record<number, string[]>
  speakingIndex: number | null
  speakQuestion: (index: number, question: ExamQuestion) => void
  handleAnswer: (id: number, selected: string, correctAnswer: string) => void
  getOptionStatus: (
    id: number,
    idx: number,
    correctAnswer: string,
  ) => 'correct' | 'wrong' | 'default'
}

const props = withDefaults(defineProps<Props>(), {
  questions: () =>
    [
      {
        id: 0,
        category: '' as ExamCategory,
        question: '',
        image: '',
        options: [''],
        correctAnswer: '',
        explanation: '',
        source: '',
      },
    ] as ExamQuestion[],
  userAnswers: () => ({}) as Record<number, string[]>,
  speakingIndex: null,
  speakQuestion: () => {},
  handleAnswer: () => {},
  getOptionStatus: (() => 'default') as (
    id: number,
    idx: number,
    correctAnswer: string,
  ) => 'correct' | 'wrong' | 'default',
})

const emit = defineEmits<{
  (e: 'clear-answer', id: number): void
}>()

function clearAnswer(id: number) {
  emit('clear-answer', id)
}

function handleAsk(question: ExamQuestion, site: 'google' | 'brave'): string {
  const answerData = props.userAnswers[question.id]

  if (!answerData) {
    console.warn(`No answer data found for question ${question.id}`)
    return ''
  }

  const [userAnswer, correctAnswer] = answerData

  const optionsText = question.options
    .map((item, idx) => `${String.fromCharCode(65 + idx)}. ${item}`)
    .join('\n')

  const status = userAnswer === correctAnswer ? 'correct' : 'wrong'

  const prompt = [
    'You are an expert tutor. Analyze the following multiple-choice question and provide a detailed explanation.',
    `**Question:** ${question.question}`,
    `**Options:**\n${optionsText}`,
    `**Your Answer:** ${userAnswer}`,
    `**Correct Answer:** ${correctAnswer}`,
    `**Instructions:**`,
    `1. Briefly explain what the question is testing.`,
    `2. Confirm whether the provided correct answer is indeed correct, and justify why.`,
    `3. Evaluate the user's answer and explain why it is ${status}.`,
    `4. If the user's answer is incorrect, clarify the misconception and guide them toward the correct reasoning.`,
  ].join('\n\n')

  const encodedQuery = encodeURIComponent(prompt)

  if (site === 'google') {
    const baseUrl = 'https://www.google.com/search?q='
    return `${baseUrl}${encodedQuery}&udm=50`
  }

  if (site === 'brave') {
    const baseUrl = 'https://search.brave.com/ask?q='
    return `${baseUrl}${encodedQuery}`
  }

  return ''
}
</script>

<template>
  <div class="molecule-question-item">
    <Accordion type="multiple" collapsible class="w-full space-y-4">
      <AccordionItem
        v-for="(question, index) in questions"
        :key="question.id"
        :value="`item-${question.id}`"
        class="bg-card text-card-foreground rounded-lg border shadow-sm"
        :class="{
          'border-green-500 bg-green-50 dark:bg-green-900/20':
            props.userAnswers[question.id] &&
            props.userAnswers[question.id]?.[0] === props.userAnswers[question.id]?.[1],
          'border-red-500 bg-red-50 dark:bg-red-900/20':
            props.userAnswers[question.id] &&
            props.userAnswers[question.id]?.[0] !== props.userAnswers[question.id]?.[1],
        }"
      >
        <AccordionTrigger
          class="hover:bg-muted/50 cursor-pointer rounded-t-lg px-6 py-4 hover:no-underline"
        >
          <div class="flex items-center gap-3 text-left">
            <Badge variant="secondary" class="shrink-0 self-start"> Q{{ index + 1 }} </Badge>
            <div class="flex flex-col">
              <span class="text-base font-medium">{{ question.question }}</span>
              <span class="text-muted-foreground mt-1 text-xs">{{ question.category }}</span>
            </div>
          </div>
        </AccordionTrigger>

        <AccordionContent class="px-6 pt-2 pb-6">
          <Card class="border-0 bg-transparent shadow-none">
            <CardContent class="space-y-3 p-0">
              <Badge v-if="question.image" variant="outline" class="flex justify-center p-2">
                <AtomLazyImage
                  :src="question.image"
                  :alt="question.question"
                  class="max-w-50 rounded-lg border"
                />
              </Badge>
              <div class="pt-2">
                <Button
                  variant="outline"
                  size="sm"
                  class="gap-2"
                  :class="{
                    'bg-primary text-primary-foreground hover:bg-primary/90 cursor-pointer':
                      props.speakingIndex === index,
                  }"
                  @click.stop="props.speakQuestion(index, question)"
                >
                  <component
                    :is="props.speakingIndex === index ? Square : Volume2"
                    class="h-4 w-4"
                  />
                  {{ props.speakingIndex === index ? 'Stop Reading' : 'Read Question & Options' }}
                </Button>
              </div>
              <button
                v-for="(opt, idx) in question.options"
                :key="idx"
                variant="link"
                as-child
                @click="
                  (props.handleAnswer(
                    question.id,
                    String.fromCharCode(65 + idx),
                    question.correctAnswer,
                  ),
                  props.speakingIndex === index && props.speakQuestion(index, question))
                "
                class="hover:bg-muted/50 flex w-full cursor-pointer items-center gap-3 rounded-md border p-3 transition-colors"
                :class="{
                  'border-green-500 bg-green-50 dark:bg-green-900/20':
                    props.getOptionStatus(question.id, idx, question.correctAnswer) === 'correct',
                  'border-red-500 bg-red-50 dark:bg-red-900/20':
                    props.getOptionStatus(question.id, idx, question.correctAnswer) === 'wrong',
                  'opacity-50':
                    userAnswers[question.id] &&
                    props.getOptionStatus(question.id, idx, question.correctAnswer) === 'default',
                }"
              >
                <Badge
                  variant="outline"
                  class="h-8 w-8 shrink-0 justify-center font-mono"
                  :class="{
                    'border-green-600 bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300':
                      props.getOptionStatus(question.id, idx, question.correctAnswer) === 'correct',
                    'border-red-600 bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300':
                      props.getOptionStatus(question.id, idx, question.correctAnswer) === 'wrong',
                  }"
                >
                  {{ String.fromCharCode(65 + idx) }}
                </Badge>
                <span class="text-start text-sm">{{ opt }}</span>
              </button>
            </CardContent>

            <CardFooter
              v-if="props.userAnswers[question.id]"
              class="animate-in fade-in slide-in-from-top-2 mt-6 flex flex-col items-start gap-2 rounded-lg border border-green-200 bg-green-50 p-4 dark:border-green-900 dark:bg-green-950/20"
            >
              <div class="flex items-center gap-2 font-semibold text-green-700 dark:text-green-400">
                <span
                  class="flex h-5 w-5 items-center justify-center rounded-full bg-green-200 text-xs dark:bg-green-900"
                >
                  ✓
                </span>
                Correct Answer:
                <Badge variant="secondary" class="font-mono">{{ question.correctAnswer }}</Badge>
              </div>
              <CardDescription class="text-sm text-green-800 dark:text-green-300">
                {{ question.explanation }}
              </CardDescription>
              <div class="mt-1 text-xs font-medium text-green-600/80 dark:text-green-500">
                Source: {{ question.source }}
              </div>

              <Button
                v-if="false"
                variant="ghost"
                size="sm"
                class="mt-2 h-8 cursor-pointer text-xs text-green-700 hover:bg-green-100 hover:text-green-900"
                @click="clearAnswer(question.id)"
              >
                Try Again
              </Button>
              <Button
                variant="ghost"
                size="sm"
                class="mt-2 h-8 cursor-pointer text-xs text-green-700 hover:bg-green-100 hover:text-green-900"
                as-child
              >
                <a :href="handleAsk(question, 'google')" target="_blank">
                  Double check with google?
                </a>
              </Button>
              <Button
                variant="ghost"
                size="sm"
                class="mt-2 h-8 cursor-pointer text-xs text-green-700 hover:bg-green-100 hover:text-green-900"
                as-child
              >
                <a :href="handleAsk(question, 'brave')" target="_blank">
                  Double check with brave?
                </a>
              </Button>
            </CardFooter>
          </Card>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
    <span class="sr-only">molecule-question-item</span>
  </div>
</template>
