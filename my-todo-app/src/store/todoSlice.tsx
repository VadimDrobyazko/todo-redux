import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";


export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export interface TodoState {
  items: Todo[];
}

const initialState: TodoState = {
  items: [],
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      state.items.push({
        id: Date.now(),
        text: action.payload,
        completed: false,
      });
    },
    toggleTodo: (state, action: PayloadAction<number>) => {
      const todo = state.items.find((t) => t.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    removeTodo: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((t) => t.id !== action.payload);
    },
    toggleAll: (state) => {
      const allCompleted = state.items.every(todo => todo.completed);
      state.items = state.items.map(todo => ({
        ...todo,
        completed: !allCompleted,
      }));
    },
    removeActiveTodo: (state) => {
      state.items = state.items.filter((todo) => !todo.completed);
    }
  },
});

export const { addTodo, toggleTodo, removeTodo, toggleAll, removeActiveTodo } = todoSlice.actions;
export default todoSlice.reducer;
