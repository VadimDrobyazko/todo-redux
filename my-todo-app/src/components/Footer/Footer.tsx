import React from 'react'
import styles from './footer.module.scss';
import {useTodos} from "../../context/TodoContext.tsx";

const Footer: React.FC = () => {
  const { activeTodos } = useTodos();

  return (
    <footer className={styles.footer}>
      <span className={styles.footer__count}>{activeTodos.length} items left</span>

      <div className={styles.footer__filter}>
        <div className={styles.filter__link}>All</div>
        <div className={styles.filter__link}>Active</div>
        <div className={styles.filter__link}>Completed</div>
      </div>

      <button
        type="button"
        className={styles.footer__clear}
        disabled={activeTodos.length === 0}
      >
        clear completed
      </button>
    </footer>
  )
}
export default Footer
