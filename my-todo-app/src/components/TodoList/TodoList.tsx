import React from 'react'
import styles from './TodoList.module.scss';
import TodoItem from "../TodoItem/TodoItem.tsx";
import type { Todo } from '../../store/todoSlice.tsx'

type Props = {
  todos: Todo[];
}

const TodoList: React.FC<Props> = ({ todos }) => {


  return (
    <section className={styles['todo__main']}>
      {todos.map(item => (
        <TodoItem key={item.id} item={item} />
      ))}
    </section>
  )
}

export default TodoList
