<script setup lang="ts">
import { toTypedSchema } from '@vee-validate/zod'
import { useForm } from 'vee-validate'
import { z } from 'zod'
import { storeToRefs } from 'pinia'

import { useExamConfigStore } from '@/stores/examConfig'
import { FormField } from '@/components/ui/form'

const store = useExamConfigStore()
const { examLength, examCategory } = storeToRefs(store)

const categories = [
  { value: 'all', label: 'All Categories' },
  { value: 'Road Signs', label: 'Road Signs' },
  { value: 'Traffic Rules', label: 'Traffic Rules' },
  { value: 'Penalties', label: 'Penalties' },
  { value: 'Defensive Driving', label: 'Defensive Driving' },
  { value: 'General & Republic Acts', label: 'General & Republic Acts' },
] as const

const formSchema = toTypedSchema(
  z.object({
    examLength: z.preprocess(
      (val) => (val === '' ? undefined : Number(val)),
      z
        .number()
        .refine((val) => val !== undefined, { message: 'Exam length is required' })
        .refine((val) => val >= 1, { message: 'Must be at least 1 question' })
        .refine((val) => val <= 100, { message: 'Maximum 100 questions allowed' }),
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
    examLength: undefined as number | undefined,
    examCategory: 'all',
  },
})

watch(
  [examLength, examCategory],
  ([newLen, newCat]) => {
    form.setFieldValue('examLength', newLen)

    const validCategory = (newCat || 'all') as
      | 'all'
      | 'Road Signs'
      | 'Traffic Rules'
      | 'Penalties'
      | 'Defensive Driving'
      | 'General & Republic Acts'

    form.setFieldValue('examCategory', validCategory)
  },
  { immediate: true },
)

const onSubmit = (values: { examLength: number; examCategory: string }) => {
  store.setExamLength(values.examLength)
  store.setExamCategory(values.examCategory)
}

const handleSubmit = form.handleSubmit(onSubmit)
</script>

<template>
  <TemplateDefault class="exam-configuration-view">
    <h2 class="text-2xl font-bold tracking-tight">Exam configuration</h2>
    <Card class="w-fit">
      <CardHeader>
        <div class="mb-6 space-y-2">
          <p>
            Current Length: <strong>{{ examLength }}</strong>
          </p>
          <p>
            Current Category: <strong>{{ examCategory || 'None' }}</strong>
          </p>
        </div>
      </CardHeader>
      <CardContent>
        <form @submit="handleSubmit" class="w-full max-w-sm space-y-4">
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
                  <SelectItem v-for="cat in categories" :key="cat.value" :value="cat.value">
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
        <span class="sr-only">exam-configuration-view</span>
      </CardContent>
    </Card>
  </TemplateDefault>
</template>
