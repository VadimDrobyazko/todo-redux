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
  removeTodo,
  toggleAll,
  removeActiveTodo
} from "../store/todoSlice";

export const FilterType = {
  All: 'All',
  Active: 'Active',
  Completed: 'Completed',
} as const;

export type FilterType = typeof FilterType[keyof typeof FilterType];

interface TodoContextValue {
  todos: Todo[];
  completedTodos: Todo[];
  activeTodos: Todo[];
  getById: (id: number) => Todo | undefined;
  toggle: (id: number) => void;
  handleRemove: (id: number) => void;
  isLoadingOverlay: boolean;
  toggleAllTodos: () => void;
  handleRemoveActiveTodo: () => void;
  filteredTodos: Todo[];
  setFilter: (filter: FilterType) => void;
  filter: FilterType;
}

const TodoContext = createContext<TodoContextValue | null>(null);

export const TodoProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isLoadingOverlay, setIsLoadingOverlay] = useState<boolean>(false);
  const [filter, setFilter] = useState<FilterType>(FilterType.All);
  const dispatch = useDispatch();
  const todos = useSelector((state: RootState) => state.items);

  const completedTodos: Todo[] = todos.filter((todo: Todo) => todo.completed);
  const activeTodos: Todo[] = todos.filter((todo: Todo) => !todo.completed);

  const filteredTodos: Todo[] = todos.filter(todo => {
    switch (filter) {
      case FilterType.Active:
        return !todo.completed;
      case FilterType.Completed:
        return todo.completed;
      case FilterType.All:
      default:
        return true;
    }
  })

  const getById = (id: number) => todos.find((todo: Todo) => todo.id === id);

  const toggle = (id: number) => dispatch(toggleTodo(id));

  const toggleAllTodos = () => {
    dispatch(toggleAll());
  }

  const handleRemove = (id: number) => {
    setIsLoadingOverlay(true);
    setTimeout(() => {
      dispatch(removeTodo(id));
      setIsLoadingOverlay(false);
    }, 300);
  };

  const handleRemoveActiveTodo = () => {
    dispatch(removeActiveTodo());
  }


  return (
    <TodoContext.Provider value={{
      todos,
      completedTodos,
      activeTodos,
      getById,
      toggle,
      handleRemove,
      isLoadingOverlay,
      toggleAllTodos,
      handleRemoveActiveTodo,
      filteredTodos,
      setFilter,
      filter
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
