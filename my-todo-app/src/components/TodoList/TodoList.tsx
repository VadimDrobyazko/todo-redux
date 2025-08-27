import React from 'react'
import styles from './TodoList.module.scss';
import {useDispatch, useSelector} from "react-redux";
import type {RootState} from "../../store/store.tsx";
import TodoItem from "../TodoItem/TodoItem.tsx";

const TodoList: React.FC = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state: RootState) => state.items);

  return (
    <section className={styles['todo__main']}>
      {todos.map(item => (
        <TodoItem key={item.id} item={item} />
      ))}
    </section>
  )
}

export default TodoList
