import React, {
  type FormEvent,
  useState
} from 'react'
import styles from './header.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import {useDispatch} from "react-redux";
import {addTodo} from "../../store/todoSlice.tsx";

const Header: React.FC = () => {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const title = query.trim();

    if (title && title.length > 1) {
      dispatch(addTodo(title));
      setQuery('');
    }
  }

  return (
    <header className={styles.todo__header}>
      <div className={styles.todo__toggle}>
        <FontAwesomeIcon icon={faChevronUp} />
      </div>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className={styles.todo__input}
          placeholder="What needs to be done?"
        />
      </form>
    </header>
  )
}
export default Header;
