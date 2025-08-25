import React from 'react'
import styles from './TodoList.module.scss';

const TodoList: React.FC = () => {
  return (
    <section className={styles['todo__main']}>
      <div className={styles['todo__item']}>
        <label
          htmlFor="todo__item-title"
          className={styles['todo__label']}
        ></label>

        <span className={styles['todo__item-title']}></span>
        <div className={styles['todo__item-delete']}></div>
        <div className={styles['todo__item-overlay']}></div>
      </div>
    </section>
  )
}

export default TodoList
