import React, { createContext, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../store/store";
import { toggleTodo, type Todo } from "../store/todoSlice";

interface TodoContextValue {
  todos: Todo[];
  completedTodos: Todo[];
  activeTodos: Todo[];
  getById: (id: number) => Todo | undefined;
  toggle: (id: number) => void;
}

const TodoContext = createContext<TodoContextValue | null>(null);

export const TodoProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const dispatch = useDispatch();
  const todos = useSelector((state: RootState) => state.items);

  const completedTodos: Todo[] = todos.filter((todo: Todo) => todo.completed);
  const activeTodos: Todo[] = todos.filter((todo: Todo) => !todo.completed);

  const getById = (id: number) => todos.find((todo: Todo) => todo.id === id);

  const toggle = (id: number) => dispatch(toggleTodo(id));

  return (
    <TodoContext.Provider value={{
      todos,
      completedTodos,
      activeTodos,
      getById,
      toggle
    }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export const useTodos = () => {
  const context = useContext(TodoContext);

  if (!context) {
    throw new Error("useTodos must be used within a TodoProvider");
  }

  return context;
};
