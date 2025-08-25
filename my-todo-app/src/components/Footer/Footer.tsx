import React from 'react'
import styles from './footer.module.scss';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <span className={styles.footer__count}>{}</span>

      <div className={styles.footer__filter}>
        <div className={styles.filter__link}>All</div>
        <div className={styles.filter__link}>Active</div>
        <div className={styles.filter__link}>Completed</div>
      </div>

      <div className={styles.footer__clear}></div>
    </footer>
  )
}
export default Footer
