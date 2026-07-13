import { SpeechSynthesis, type SpeakOptions } from '@capgo/capacitor-speech-synthesis'
import type { ExamQuestion } from '@/types'

export function useExamSpeech() {
  const speakingIndex = ref<number | null>(null)

  const speakQuestion = async (index: number, q: ExamQuestion) => {
    await SpeechSynthesis.cancel()

    if (speakingIndex.value === index) {
      speakingIndex.value = null
      return
    }

    const optionsText = q.options
      .map((opt: string, i: number) => `${String.fromCharCode(65 + i)}. ${opt}`)
      .join('. ')

    const textToSpeak = `Question: ${q.question}. Options: ${optionsText}.`

    try {
      speakingIndex.value = index

      const speakOpts: SpeakOptions = {
        text: textToSpeak,
        language: 'en-US',
        rate: 0.95,
        pitch: 1,
        volume: 1,
        queueStrategy: 'Flush',
      }

      const finishListener = await SpeechSynthesis.addListener('end', () => {
        speakingIndex.value = null
        finishListener.remove()
      })

      const errorListener = await SpeechSynthesis.addListener('error', () => {
        speakingIndex.value = null
        errorListener.remove()
      })

      await SpeechSynthesis.speak(speakOpts)
    } catch (error) {
      console.error('Speech failed', error)
      speakingIndex.value = null
    }
  }

  const stopSpeaking = async () => {
    await SpeechSynthesis.cancel()
    speakingIndex.value = null
  }

  return { speakingIndex, speakQuestion, stopSpeaking }
}
