<template>
    <UContainer>
        <UCard v-if="isAuthenticated">{{ user.displayName }}</UCard>
        <h1>test</h1>
    </UContainer>
</template>

<script setup>
    definePageMeta({
        middleware: 'auth'
    })
</script>

<style lang="scss" scoped>

</style> 