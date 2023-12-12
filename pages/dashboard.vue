<template>
    <UContainer>
        <UCard v-if="isAuthenticated">{{ user.displayName }}</UCard>
    </UContainer>
</template>

<script setup>
    definePageMeta({
        middleware: 'auth'
    })
</script>

<style lang="scss" scoped>

</style> 