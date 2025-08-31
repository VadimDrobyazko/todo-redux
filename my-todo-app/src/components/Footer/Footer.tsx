import React from 'react'
import styles from './footer.module.scss';
import {
  FilterType,
  useTodos
} from "../../context/TodoContext.tsx";


const Footer: React.FC = () => {
  const { activeTodos, completedTodos, handleRemoveActiveTodo, setFilter, filter } = useTodos();

  console.log('test', styles);

  return (
    <footer className={styles.footer}>
      <span className={styles.footer__count}>{activeTodos.length} items left</span>

      <div className={styles.footer__filter}>
        <div
          className={`${styles['footer__link']} ${filter === FilterType.All ? styles.active : ''}`}
          onClick={() => setFilter(FilterType.All)}
        >
          All
        </div>

        <div
          className={`${styles['footer__link']} ${filter === FilterType.Active ? styles.active : ''}`}
          onClick={() => setFilter(FilterType.Active)}
        >
          Active
        </div>

        <div
          className={`${styles['footer__link']} ${filter === FilterType.Completed ? styles.active : ''}`}
          onClick={() => setFilter(FilterType.Completed)}
        >
          Completed
        </div>
      </div>

      <button
        type="button"
        className={styles.footer__clear}
        disabled={completedTodos.length === 0}
        onClick={handleRemoveActiveTodo}
      >
        clear completed
      </button>
    </footer>
  )
}

export default Footer
