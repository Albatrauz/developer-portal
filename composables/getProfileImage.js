import { useStorage } from '@vueuse/core'

export const useProfileImage = (image) => {
    const profileImage = useStorage('profileImage', image)
    return {
        profileImage
    }
}