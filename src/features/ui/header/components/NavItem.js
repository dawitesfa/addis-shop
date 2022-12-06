import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'

import classes from './NavItem.module.css'
import AppContext from '../../../../store/app-context'

export const NavItem = ({ children, pathMatch, path, navTitle }) => {
  const navigate = useNavigate()
  const ctx = useContext(AppContext)

  const isInvisible = () =>
    (path === '/profile' && !ctx.user) || (path === '/sign-in' && ctx.user)

  return (
    <li
      className={`${classes['nav-menu']} ${
        pathMatch ? classes['active-bg'] : ''
      } ${isInvisible() ? classes.invisible : ''}`}
      onClick={() => {
        navigate(path)
      }}
    >
      {children}
      <p
        className={`${classes['nav-name']} ${pathMatch ? classes.active : ''}`}
      >
        {navTitle}
      </p>
    </li>
  )
}
