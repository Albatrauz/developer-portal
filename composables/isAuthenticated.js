import { initializeApp } from 'firebase/app'
import { useAuth } from '@vueuse/firebase/useAuth'
import { getAuth } from 'firebase/auth'
import { firebaseConfig } from '../utils/firebase';

const app = initializeApp(firebaseConfig)
const auth = getAuth(app);

export const { isAuthenticated, user } = useAuth(auth);