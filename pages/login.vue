<script setup>
    import { useStorage } from '@vueuse/core'
    definePageMeta({
        middleware: 'auth'
    })
    const toast = useToast();
    const name = useStorage('savedName');
    
    watch(isAuthenticated, (isAuthenticated) => {
        if (isAuthenticated) {
            toast.add({
                title: `Welcome back ${name.value}`,
            })
        }
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
            <div @click="useSignOut">Test</div>
        </UCard>
    </UContainer>
</template>


<style lang="scss" scoped>

</style>        