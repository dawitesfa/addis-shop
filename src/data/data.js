import { ReactComponent as ExploreIcon } from '../asset/svg/exploreIcon.svg'
import { ReactComponent as PersonOutlineIcon } from '../asset/svg/personOutlineIcon.svg'
import { ReactComponent as ServicesOutlineIcon } from '../asset/svg/badgeIcon.svg'
import { ReactComponent as AboutOutlineIcon } from '../asset/svg/homeIcon.svg'

export const categories = [
  {
    id: '001',
    name: 'Electronics',
    pathName: 'electronics',
    imageUrl:
      'https://images.unsplash.com/photo-1526738549149-8e07eca6c147?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1925&q=80',
  },
  {
    id: '002',
    name: 'Vehicle Rental',
    pathName: 'vehicle-rental',
    imageUrl:
      'https://images.unsplash.com/photo-1482446439224-59276c41a5fc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
  },
  {
    id: '003',
    name: 'Vehicle Sell',
    pathName: 'vehicle-sell',
    imageUrl:
      'https://plus.unsplash.com/premium_photo-1661293849183-56b763a87b9c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80',
  },
  {
    id: '004',
    name: 'House Rental',
    pathName: 'house-rental',
    imageUrl:
      'https://images.unsplash.com/photo-1566195992011-5f6b21e539aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
  },
  {
    id: '005',
    name: 'House Sell',
    pathName: 'house-sell',
    imageUrl:
      'https://images.unsplash.com/photo-1494526585095-c41746248156?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
  },
  {
    id: '006',
    name: 'Vacancy',
    pathName: 'vacancy',
    imageUrl:
      'https://images.unsplash.com/photo-1549923746-c502d488b3ea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80',
  },
  {
    id: '007',
    name: 'Clothing',
    pathName: 'clothing',
    imageUrl:
      'https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1935&q=80',
  },
  {
    id: '008',
    name: 'Household',
    pathName: 'household',
    imageUrl:
      'https://images.unsplash.com/photo-1589983006655-4ef9a756ebe3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=495&q=80',
  },
  {
    id: '009',
    name: 'Smartphones',
    pathName: 'smartphones',
    imageUrl:
      'https://images.unsplash.com/photo-1589983006655-4ef9a756ebe3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=495&q=80',
  },
  {
    id: '010',
    name: 'Laptop',
    pathName: 'laptop',
    imageUrl:
      'https://images.unsplash.com/photo-1589983006655-4ef9a756ebe3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=495&q=80',
  },
]

export const conditions = ['New', 'Used', 'Used like new', 'Damaged']

export const navItems = [
  {
    title: 'Explore',
    icon: <ExploreIcon fill='#777' />,
    activeIcon: <ExploreIcon fill='var(--color-primary-accent)' />,
    path: '/',
  },
  {
    title: 'Services',
    icon: <ServicesOutlineIcon fill='#777' />,
    activeIcon: <ServicesOutlineIcon fill='var(--color-primary-accent)' />,
    path: '/services',
  },
  {
    title: 'About',
    icon: <AboutOutlineIcon fill='#777' />,
    activeIcon: <AboutOutlineIcon fill='var(--color-primary-accent)' />,
    path: '/about-us',
  },
  {
    title: 'Profile',
    icon: <PersonOutlineIcon fill='#777' />,
    activeIcon: <PersonOutlineIcon fill='var(--color-primary-accent)' />,
    path: '/profile',
  },
  {
    title: 'Sign In',
    icon: <PersonOutlineIcon fill='#777' />,
    activeIcon: <PersonOutlineIcon fill='var(--color-primary-accent)' />,
    path: '/sign-in',
  },
]
