import { useState, useRef, useEffect } from 'react'
import { getAuth, onAuthStateChanged } from 'firebase/auth'

import AppContext from './app-context'
import { app } from '../firebase/firebase.config'

export const AppContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true)

  const [user, setUser] = useState(null)
  const isMounted = useRef(true)

  const changeLoadingState = () => {
    setIsLoading((prev) => !prev)
  }

  useEffect(() => {
    console.log('done')
    if (isMounted) {
      const auth = getAuth(app)
      onAuthStateChanged(auth, (user) => {
        if (user) {
          setUser(user)
        }
        setIsLoading(false)
      })
      return () => {
        isMounted.current = false
      }
    }
  }, [isMounted])

  return (
    <AppContext.Provider
      value={{
        isLoading: isLoading,
        setIsLoading: changeLoadingState,
        user: user,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
