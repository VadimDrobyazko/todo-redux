import React from "react";
import styles from './App.module.scss'
import Header from "./components/Header/Header.tsx";
import TodoList from "./components/TodoList/TodoList.tsx";
import Footer from "./components/Footer/Footer.tsx";

const App: React.FC = () => {

  return (
    <>
     <h1 className={styles.todo__title}>Todos</h1>

      <div className={styles.todo__app}>
        <Header />
        <TodoList />
        <Footer />
      </div>
    </>
  )
}

export default App;
