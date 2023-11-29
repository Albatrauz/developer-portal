<script setup>
    definePageMeta({
        middleware: 'auth'
    })
</script>
<template>
    <UContainer class="py-9">    
        <UCard  class="max-w-4xl mx-auto dark:bg-slate-800 dark:ring-slate-700">
            <template #header >
                <div class="font-medium text-emerald-400 text-2xl" @click="useSignIn">
                    Login
                </div>

                <div class="font-medium" v-if="isAuthenticated">
                    {{ user }}
                </div>
            </template>
            Test
        </UCard>
    </UContainer>
</template>


<style lang="scss" scoped>

</style>        