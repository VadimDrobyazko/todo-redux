import React from 'react'
import styles from './TodoItem.module.scss';
import {
  FontAwesomeIcon
} from "@fortawesome/react-fontawesome";
import {faDeleteLeft, faSpinner, faCheck} from "@fortawesome/free-solid-svg-icons";
import type {Todo} from '../../store/todoSlice';

type Props = {
  item: Todo;
};

const TodoItem: React.FC<Props> = ({ item }) => {
  return (
    <div className={styles['todo__item']}>
      <label
        htmlFor="todo__item-title"
        className={styles['todo__label']}
      >
        <FontAwesomeIcon icon={faCheck}/>
      </label>

      <span className={styles['todo__item-title']}>{item.text}</span>
      <div className={styles['todo__item-delete']}>
        <FontAwesomeIcon icon={faDeleteLeft} />
      </div>
      <div className={styles['todo__item-overlay']}>
        <FontAwesomeIcon icon={faSpinner} />
      </div>
    </div>
  )
}
export default TodoItem
