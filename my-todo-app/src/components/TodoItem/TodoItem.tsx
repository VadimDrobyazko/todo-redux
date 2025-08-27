import React from 'react';
import styles from './TodoItem.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDeleteLeft, faSpinner, faCheck } from "@fortawesome/free-solid-svg-icons";
import {
  type Todo,
} from '../../store/todoSlice';
import {useTodos} from "../../context/TodoContext.tsx";

type Props = {
  item: Todo;
};

const TodoItem: React.FC<Props> = ({ item }) => {
  const { toggle, handleRemove, isLoadingOverlay } = useTodos();

  const isCompleted = item ? item.completed : false;


  return (
    <div className={styles['todo__item']}>
      <label
        htmlFor="todo__item-title"
        className={styles['todo__label']}
        onClick={() => toggle(item.id)}
      >
        {isCompleted ? <FontAwesomeIcon icon={faCheck} /> : ''}
      </label>

      <span className={styles['todo__item-title']}>{item.text}</span>

      <div
        className={styles['todo__item-delete']}
        onClick={() => handleRemove(item.id)}
      >
        {isLoadingOverlay
          ? <FontAwesomeIcon icon={faSpinner} spin />
          : <FontAwesomeIcon icon={faDeleteLeft} />}
      </div>
    </div>
  );
};

export default TodoItem;
