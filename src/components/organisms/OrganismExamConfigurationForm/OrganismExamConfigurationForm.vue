<script setup lang="ts">
import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import { z } from 'zod'
import { FormField } from '@/components/ui/form'
import type { ExamCategoryValue } from '@/stores/examConfig'

interface Props {
  categories?: Array<{ value: string; label: string }>
  examLength?: number
  examCategory?: string
}

const props = withDefaults(defineProps<Props>(), {
  categories: () => [],
  examLength: 0,
  examCategory: 'all',
})

const emit = defineEmits<{
  handleSubmit: [values: { examLength: number; examCategory: string }]
}>()

const formSchema = toTypedSchema(
  z.object({
    examLength: z.preprocess(
      (val) => (val === '' ? undefined : Number(val)),
      z
        .number()
        .min(1, { message: 'Must be at least 1 question' })
        .max(100, { message: 'Maximum 100 questions allowed' }),
    ),
    examCategory: z.enum([
      'all',
      'Road Signs',
      'Traffic Rules',
      'Penalties',
      'Defensive Driving',
      'General & Republic Acts',
    ]),
  }),
)

const form = useForm({
  validationSchema: formSchema,
  initialValues: {
    examLength: props.examLength && props.examLength > 0 ? props.examLength : 1,
    examCategory: (props.categories.find((c) => c.value === props.examCategory)
      ? props.examCategory
      : 'all') as ExamCategoryValue,
  },
})

const onSubmit = (values: { examLength?: number; examCategory: string }) => {
  const payload = {
    examLength: values.examLength ?? 1,
    examCategory: values.examCategory,
  }

  emit('handleSubmit', payload)
}

const handleSubmit = form.handleSubmit(onSubmit)
</script>

<template>
  <Card class="organism-exam-configuration-form">
    <CardHeader>
      <div class="mb-6 space-y-2">
        <p>
          Current Length: <strong>{{ props.examLength }}</strong>
        </p>
        <p>
          Current Category: <strong>{{ props.examCategory }}</strong>
        </p>
      </div>
    </CardHeader>
    <CardContent>
      <!-- Ensure @submit.prevent is used -->
      <form @submit.prevent="handleSubmit" class="w-full max-w-sm space-y-4">
        <FormField v-slot="{ componentField }" name="examLength">
          <FormItem>
            <FormLabel>Number of Questions</FormLabel>
            <FormControl>
              <Input type="number" v-bind="componentField" placeholder="e.g. 20" />
            </FormControl>
            <FormMessage />
          </FormItem>
        </FormField>

        <FormField v-slot="{ value, handleChange }" name="examCategory">
          <FormItem>
            <FormLabel>Category</FormLabel>
            <Select :model-value="value" @update:model-value="handleChange">
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Select a category" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectItem v-for="cat in props.categories" :key="cat.value" :value="cat.value">
                  {{ cat.label }}
                </SelectItem>
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        </FormField>

        <Button type="submit" variant="outline" class="w-full cursor-pointer">
          Apply Changes
        </Button>
      </form>
    </CardContent>
    <span class="sr-only">organism-exam-configuration-form</span>
  </Card>
</template>
