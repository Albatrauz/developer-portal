<template>
    <div>
        <h1>home</h1>
    </div>
</template>

<script setup>
    definePageMeta({
        middleware: 'auth'
    })

    if (isAuthenticated) {
        navigateTo('/dashboard');
    } else {
        navigateTo('/login');
    }
</script>

<style lang="scss" scoped>

</style>