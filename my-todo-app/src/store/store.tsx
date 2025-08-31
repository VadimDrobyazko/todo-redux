import { configureStore } from '@reduxjs/toolkit';
import todosReducer from './todoSlice.tsx';
import type { TodoState } from './todoSlice.tsx';

const loadState = (): TodoState | undefined => {
  try {
    const serialized = localStorage.getItem("todos");
    if (serialized === null) return undefined;
    return JSON.parse(serialized);
  } catch (err) {
    console.error("Failed to load todos", err);
    return undefined;
  }
};

const saveState = (state: TodoState) => {
  try {
    const serialized = JSON.stringify(state);
    localStorage.setItem("todos", serialized);
  } catch (err) {
    console.error("Failed to save todos", err);
  }
};

export const store = configureStore({
  reducer: todosReducer,
  preloadedState: loadState(),
});

store.subscribe(() => {
  saveState(store.getState());
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
