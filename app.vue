<script setup lang="ts">
    definePageMeta({
        middleware: 'auth'
    })
</script>

<template>
  <UContainer>
    <div class="container mx-auto flex justify-end py-9 items-center">
      <div v-if="isAuthenticated" class="flex items-center gap-x-1.5">

        <UButton 
          @click=""

          icon="i-heroicons-cog-8-tooth"
          />
        <UButton 
          @click="useSignOut"
          label="Uitloggen"
        />
      </div>
    </div>
    <NuxtPage />
  </UContainer>
  <UNotifications />
</template>
