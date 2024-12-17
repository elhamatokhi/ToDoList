import { useState } from "react";
import "./styles.css";

export default function App() {
  const [newItem, setNewItem] = useState("");
  const [todos, setTodo] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodo((currentTodo) => {
      return [
        ...currentTodo,
        { id: crypto.randomUUID(), completed: false, title: newItem },
      ];
    });

    setNewItem("");
  };

  function toggleId(id, completed) {
    setTodo((currentTodo) => {
      return currentTodo.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed };
        }
        return todo;
      });
    });
  }

  function deletTodo(id) {
    setTodo((currentTodo) => {
      return currentTodo.filter((todo) => todo.id !== id);
    });
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="new-item-form">
        <div className="form-row">
          <label htmlFor="item"> New Item </label>
          <input
            type="text"
            id="item"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
          ></input>
        </div>
        <button className="btn"> Add</button>
      </form>

      <h1>Todo List</h1>

      <ul className="list">
        {todos.length == 0 && "Welcome to Do nothing Club"}
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              <label>
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={(e) => toggleId(todo.id, e.target.checked)}
                />
                {todo.title}
              </label>
              <button
                onClick={() => deletTodo(todo.id)}
                className="btn btn-danger"
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}
