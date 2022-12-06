import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'

import { toast } from 'react-toastify'

import styles from './Login.module.css'
import visibilityIcon from '../../../asset/svg/visibilityIcon.svg'
import { CircleButton, Container, RightArrow } from '../../ui'
import { OAuth } from '../auth/OAuth'

export const Login = () => {
  const [passVisible, setPassVisible] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })
  const navigate = useNavigate()

  const onChangeHandler = (e) => {
    setFormData((prev) => {
      return { ...prev, [e.target.id]: e.target.value }
    })
  }
  const { email, password } = formData

  const onSubmitHandler = async (e) => {
    e.preventDefault()
    try {
      const auth = getAuth()

      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      )
      if (userCredential.user) {
        navigate('/')
      }
    } catch (error) {
      toast.error('Wrong user credentials!')
    }
  }
  return (
    <Container className={styles.container} width='65%'>
      <h2>Sign In </h2>
      <form className={styles.form} onSubmit={onSubmitHandler}>
        <div className={styles['form-control']}>
          <label htmlFor='email' className={styles['label-email']}>
            <input
              onChange={onChangeHandler}
              type='email'
              className={`${styles['email-input']} ${styles.input}`}
              id='email'
              placeholder='Email'
              value={email}
            />
          </label>
        </div>
        <div className={styles['form-control']}>
          <label htmlFor='email' className={styles['label-password']}>
            <input
              onChange={onChangeHandler}
              type={passVisible ? 'text' : 'password'}
              className={`${styles['email-input']} ${styles.input}`}
              id='password'
              placeholder='Password'
              value={password}
            />
          </label>
          <img
            style={{ opacity: `${passVisible ? '0.7' : '0.3'}` }}
            src={visibilityIcon}
            alt='Show Password'
            onClick={() => {
              setPassVisible((prev) => !prev)
            }}
          />
        </div>
        <Link
          className={`${styles['forgot-password-link']} ${styles.link}`}
          to={'/forgot-password'}
        >
          Forgot Password?
        </Link>
        <div className={styles['sign-in']}>
          <h3>Sign in</h3>
          <CircleButton type='submit' className={styles['circle-btn']}>
            <RightArrow fill='white' width='3rem' height='3rem' />
          </CircleButton>
        </div>
      </form>

      <div className={styles['sign-in']}>
        <h3>Sign in with Google</h3>
        <OAuth />
      </div>
      <div className='center-content' style={{ marginTop: '4rem' }}>
        <p style={{ display: 'inline' }}>You have not an account? &nbsp;</p>
        <Link
          to={'/sign-up'}
          className={`${styles['sign-up-link']} ${styles.link}`}
        >
          Sign Up
        </Link>
      </div>
    </Container>
  )
}
