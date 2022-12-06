import styles from './SearchBar.module.css'

export const SearchBar = ({}) => {
  return (
    <div className={styles['search-bar']}>
      <form action='' className={styles.search}>
        <div className={styles['form-control']}>
          <input
            className={styles['search-input']}
            type='text'
            placeholder='Search for Product'
          />
          <button type='button'>
            <i className='bi bi-search'></i>
          </button>
        </div>
      </form>
    </div>
  )
}
