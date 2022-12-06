import styles from './CircleButton.module.css'

export const CircleButton = ({ type, isBg, onClick, children }) => {
  return (
    <button
      type={type}
      className={styles.btn}
      onClick={onClick}
      style={{
        backgroundColor: isBg ? 'var(--color-primary-accent)' : 'transparent',
      }}
    >
      {children}
    </button>
  )
}
CircleButton.defaultProps = { isBg: true, type: 'button' }
