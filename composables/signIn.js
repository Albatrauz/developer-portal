import { initializeApp } from 'firebase/app'
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth'
import { firebaseConfig } from '../utils/firebase';

const app = initializeApp(firebaseConfig)
const auth = getAuth(app);

export const useSignIn = () => {
  signInWithPopup(auth, new GoogleAuthProvider()).then(() => {
    useProfileImage(auth.currentUser.photoURL)
    useGetName(auth.currentUser.displayName)
  })
}
