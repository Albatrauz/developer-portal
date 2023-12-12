<script setup lang="ts">
    definePageMeta({
        middleware: 'auth'
    })
</script>

<template>
  <div class="flex">
    <SideBar v-if="isAuthenticated"/>
    <div class="container flex justify-end py-9 items-center flex-grow">
      <NuxtPage />
    </div>
  </div>
  <UNotifications />
</template>
