import React from 'react'
import styles from './header.module.scss';

const Header: React.FC = () => {
  return (
    <header className={styles.todo__header}>
      <div className={styles.todo__toggle}></div>
      <form action="">
        <input
          type="text"
          className={styles.todo__input}
          placeholder="What needs to be done?"
        />
      </form>
    </header>
  )
}
export default Header;
