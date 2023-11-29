<template>
    <UContainer>
        <div class="container mx-auto">
            <UCard v-if="isAuthenticated">{{ user.displayName }}</UCard>
        </div>
        <img src="/jungle2.jpg" />
        <TopNav />
    </UContainer>
</template>

<script setup>
    definePageMeta({
        middleware: 'auth'
    })
</script>

<style lang="scss" scoped>

</style> 