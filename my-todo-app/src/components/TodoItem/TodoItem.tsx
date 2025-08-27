import React, { useState } from 'react';
import styles from './TodoItem.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDeleteLeft, faSpinner, faCheck } from "@fortawesome/free-solid-svg-icons";
import {
  removeTodo,
  type Todo,
  toggleTodo
} from '../../store/todoSlice';
import {useDispatch} from "react-redux";

type Props = {
  item: Todo;
};

const TodoItem: React.FC<Props> = ({ item }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const dispatch = useDispatch();

  const handleRemove = () => {
    setLoading(true);
    setTimeout(() => {
      dispatch(removeTodo(item.id));
    }, 300);
  };

  const handleToggle = () => {
    dispatch(toggleTodo(item.id));
  };


  return (
    <div className={styles['todo__item']}>
      <label
        className={styles['todo__label']}
        onClick={handleToggle}
      >
        {loading ? <FontAwesomeIcon icon={faCheck} /> : ''}
      </label>

      <span className={styles['todo__item-title']}>{item.text}</span>

      <div
        className={styles['todo__item-delete']}
        onClick={handleRemove}
      >
        {loading
          ? <FontAwesomeIcon icon={faSpinner} spin />
          : <FontAwesomeIcon icon={faDeleteLeft} />}
      </div>
    </div>
  );
};

export default TodoItem;
