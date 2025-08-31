import React from 'react';
import styles from './TodoItem.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDeleteLeft, faSpinner, faCheck } from "@fortawesome/free-solid-svg-icons";
import { type Todo } from '../../store/todoSlice';
import { useTodos } from "../../context/TodoContext.tsx";

type Props = {
  item: Todo;
};

const TodoItem: React.FC<Props> = ({ item }) => {
  const { toggle, handleRemove, isLoadingOverlay } = useTodos();

  const isCompleted = item ? item.completed : false;

  return (
    <div
      className={styles['todo__item']}
      onClick={() => toggle(item.id)}   // общий клик
    >
      <label
        htmlFor={`todo-title-${item.id}`}
        className={styles['todo__label']}
      >
        {isCompleted ? <FontAwesomeIcon icon={faCheck} /> : ''}
      </label>

      <span
        className={styles['todo__item-title']}
        id={`todo-title-${item.id}`}
      >
        {item.text}
      </span>

      <div
        className={styles['todo__item-delete']}
        onClick={(e) => {
          e.stopPropagation();  // не триггерим toggle
          handleRemove(item.id);
        }}
      >
        {isLoadingOverlay
          ? <FontAwesomeIcon icon={faSpinner} spin />
          : <FontAwesomeIcon icon={faDeleteLeft} />}
      </div>
    </div>
  );
};

export default TodoItem;
