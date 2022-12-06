import { createContext } from 'react'

const AppContext = createContext({
  isLoading: false,
  isLoggedIn: false,
  setIsLoggedIn: () => {},
  setIsLoading: () => {},
  user: null,
})
export { AppContextProvider } from './context-provider'
export default AppContext
