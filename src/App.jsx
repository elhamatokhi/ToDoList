import { useEffect, useState } from "react";
import "./styles.css";
import { NewTodoForm } from "./NewTodoForm";
import { TodoList } from "./TodoList";

export default function App() {
  const [todos, setTodo] = useState(() => {
    const localValue = localStorage.getItem("ITEMS");
    if (localValue == null) return [];
    return JSON.parse(localValue);
  });
  function toggleTodo(id, completed) {
    setTodo((currentTodo) => {
      return currentTodo.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed };
        }
        return todo;
      });
    });
  }

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos));
  }, [todos]);

  function addTodo(title) {
    setTodo((currentTodo) => {
      return [
        ...currentTodo,
        { id: crypto.randomUUID(), completed: false, title },
      ];
    });
  }

  function deletTodo(id) {
    setTodo((currentTodo) => {
      return currentTodo.filter((todo) => todo.id !== id);
    });
  }

  return (
    <>
      <NewTodoForm onSubmit={addTodo} />
      <h1>Todo List</h1>
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deletTodo} />
    </>
  );
}
