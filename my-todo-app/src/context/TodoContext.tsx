import React, {
  createContext,
  useContext,
  useState
} from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../store/store";
import {
  toggleTodo,
  type Todo,
  removeTodo
} from "../store/todoSlice";

interface TodoContextValue {
  todos: Todo[];
  completedTodos: Todo[];
  activeTodos: Todo[];
  getById: (id: number) => Todo | undefined;
  toggle: (id: number) => void;
  handleRemove: (id: number) => void;
  isLoadingOverlay: boolean;
}

const TodoContext = createContext<TodoContextValue | null>(null);

export const TodoProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isLoadingOverlay, setIsLoadingOverlay] = useState<boolean>(false);
  const dispatch = useDispatch();
  const todos = useSelector((state: RootState) => state.items);

  const completedTodos: Todo[] = todos.filter((todo: Todo) => todo.completed);
  const activeTodos: Todo[] = todos.filter((todo: Todo) => !todo.completed);

  const getById = (id: number) => todos.find((todo: Todo) => todo.id === id);

  const toggle = (id: number) => dispatch(toggleTodo(id));

  const handleRemove = (id: number) => {
    setIsLoadingOverlay(true);
    setTimeout(() => {
      dispatch(removeTodo(id));
    }, 300);
  };


  return (
    <TodoContext.Provider value={{
      todos,
      completedTodos,
      activeTodos,
      getById,
      toggle,
      handleRemove,
      isLoadingOverlay
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
