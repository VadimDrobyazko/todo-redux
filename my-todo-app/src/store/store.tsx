import { configureStore } from '@reduxjs/toolkit';
import todosReducer from './todoSlice.tsx';

export const store = configureStore({
  reducer: todosReducer,
});

export type RootState = ReturnType<typeof store.dispatch>;
export type AppDispatch = typeof store.dispatch;