<script setup lang="ts">
import { useLocalStorage } from '@vueuse/core'
const store = useLocalStorage(
      'my-storage',
      {
        name: 'Apple',
        color: 'red',
      },
    )

    const ui = {
      background: 'bg-white dark:bg-cyan-950 text-emerald-400',
    }
</script>

<template>
  <div class="container mx-auto">
    <UCard :ui="ui">
      <h1>Dit is een test</h1>
    </UCard>

  </div>
</template>
