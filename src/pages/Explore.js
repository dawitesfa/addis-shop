import { useContext } from 'react'
import AppContext from '../store/app-context'

export const Explore = () => {
  const ctx = useContext(AppContext)
  return <h1>Hello, Explorer</h1>
}
