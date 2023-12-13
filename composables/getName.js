import { useStorage } from '@vueuse/core'

export const useGetName = (name) => {
    const savedName = useStorage('savedName', name)
    console.log(savedName.value) 
    return {
        savedName
    }
  }