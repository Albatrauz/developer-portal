<template>
    <div class="h-screen border-r border-solid border-slate-700 px-6 py-12">
        <UVerticalNavigation :links="links" :ui="ui" />
    </div>
</template>

<script setup>
    import { useStorage } from '@vueuse/core'
    const image = useStorage('profileImage')

    const ui = {
        "padding": "px-4",
        "size": "text-base",
        "icon": {
            "base": "flex-shrink-0 w-5 h-5 mr-1.5",
        },
        "avatar": {
            "base": "mr-1.5"
        }
        // "base": "dark:bg-red-500"
    }
    const links = [{
        label: 'Profile',
        avatar: {
            src: image.value,
            referrerpolicy: "no-referrer"  
        },
        to: '/profile'
    }, {
        label: 'Dashboard',
        icon: 'i-heroicons-command-line',
        to: '/dashboard'
    }, {
        label: 'Settings',
        icon: 'i-heroicons-cog-8-tooth',
        to: '/navigation/vertical-navigation'
    }, {
        label: 'Uitloggen',
        icon: 'i-heroicons-arrow-right-on-rectangle',
        click: () => {
            useSignOut()
        }
    }]

</script>

<style lang="scss" scoped>

</style>