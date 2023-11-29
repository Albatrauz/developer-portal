import { getAuth, signOut } from "firebase/auth"
import { initializeApp } from 'firebase/app'

const app = initializeApp(firebaseConfig)
const auth = getAuth();

export const useSignOut = () => {
  signOut(auth).then(() => {
    // Sign-out successful.
    return navigateTo('/login')
  }).catch((error) => {
    // An error happened.
  });
}