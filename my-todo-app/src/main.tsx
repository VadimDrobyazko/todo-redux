import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { TodoProvider } from "./context/TodoContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <TodoProvider>
        <App />
      </TodoProvider>
    </Provider>
  </React.StrictMode>
);
