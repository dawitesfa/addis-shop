import { useNavigate, useLocation } from 'react-router-dom'

import styles from './NavBar.module.css'
import { navItems } from '../../../../data/data'
import { NavItem } from './NavItem'

export const NavBar = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const pathMatchRoute = (route) => {
    return route === location.pathname
  }

  return (
    <nav className={styles['nav']}>
      <div
        className={styles.logo}
        onClick={() => {
          navigate('/')
        }}
      >
        <h1>SA</h1>
      </div>
      <ul className={styles['nav-menu-list']}>
        {navItems.map((item) => {
          return (
            <NavItem
              key={item.title}
              navTitle={item.title}
              path={item.path}
              pathMatch={pathMatchRoute(item.path)}
            >
              {pathMatchRoute(item.path) ? item.activeIcon : item.icon}
            </NavItem>
          )
        })}
      </ul>
    </nav>
  )
}
