<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useNormalizeRouteName } from '@/composables/useNormalizeRouteName'

const router = useRouter()
const { normalizeRouteName } = useNormalizeRouteName()

interface Props {
  title: string
}
const props = withDefaults(defineProps<Props>(), {
  title: '',
})

const filteredRouter = computed<Array<{ path: string; name: string }>>(() =>
  router
    .getRoutes()
    .filter((route) => !['landing', 'notFound'].includes(route.name?.toString() ?? ''))
    .map((route) => ({
      path: route.path,
      name: route.name?.toString() ?? '',
    })),
)
</script>

<template>
  <Card class="organism-application-setting">
    <CardHeader>
      <CardTitle>
        {{ props.title }}
      </CardTitle>
    </CardHeader>
    <CardContent class="grid grid-cols-1 gap-2 sm:grid-cols-2">
      <Button v-for="route in filteredRouter" :key="route.path" variant="outline" as-child>
        <RouterLink :to="route.path"> {{ normalizeRouteName(route.name) }} </RouterLink>
      </Button>
    </CardContent>
    <span class="sr-only">organism-application-setting</span>
  </Card>
</template>
