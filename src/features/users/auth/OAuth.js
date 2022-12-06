import { useNavigate } from 'react-router-dom'
import { CircleButton } from '../../ui'
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { toast } from 'react-toastify'
import { doc, getDoc, serverTimestamp, setDoc } from 'firebase/firestore'
import { db } from '../../../firebase/firebase.config'
import { GoogleIcon } from '../../ui'
export const OAuth = () => {
  const navigate = useNavigate()

  const onClickHandler = async (e) => {
    try {
      const auth = getAuth()
      const provider = new GoogleAuthProvider()
      const result = await signInWithPopup(auth, provider)
      const user = result.user
      const docRef = doc(db, 'users', user.uid)
      const docSnap = await getDoc(docRef)
      if (!docSnap.exists()) {
        await setDoc(doc(db, 'users', user.uid), {
          name: user.displayName,
          email: user.email,
          timeStamp: serverTimestamp(),
        })
      }
      toast.success('Sign in success!')
      navigate('/')
    } catch (error) {
      toast.error("Couldn't authenticate with google!")
    }
  }

  return (
    <div>
      <CircleButton isBg={false} onClick={onClickHandler}>
        <GoogleIcon width='24px' height='24px' />
      </CircleButton>
    </div>
  )
}
