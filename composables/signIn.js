import { initializeApp } from 'firebase/app'
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth'
import { firebaseConfig } from '../utils/firebase';

const app = initializeApp(firebaseConfig)
const auth = getAuth(app);
const toast = useToast();

export const useSignIn = () => {
  signInWithPopup(auth, new GoogleAuthProvider()).then(() => {
    toast.add({
      title: `Welkom terug ${auth.currentUser.displayName}`,
      icon: 'i-heroicons-heart-solid',
      color: 'slate',
    })
    return navigateTo('/dashboard')

  })
}
