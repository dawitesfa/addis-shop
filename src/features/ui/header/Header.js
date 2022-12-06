import { useLocation } from 'react-router-dom'

import classes from './Header.module.css'
import { NavBar, SearchBar } from './components'

export const Header = ({}) => {
  const location = useLocation()
  const showSearch = () => {
    return location.pathname === '/' || location.pathname.includes('/category')
  }
  return (
    <section className={classes.header}>
      <NavBar />
      {showSearch() && <SearchBar />}
    </section>
  )
}
