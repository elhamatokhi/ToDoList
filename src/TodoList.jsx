export function TodoList(todos) {
  return (
    <ul className="list">
      {todos.length == 0 && "Welcome to Do nothing Club"}
      {todos.map((todo) => {
        return (
          <li key={todo.id}>
            <label>
              <input
                type="checkbox"
                checked={todo.completed}
                // onChange={(e) => toggleId(todo.id, e.target.checked)}
              />
              {todo.title}
            </label>
            <button
              //   onClick={() => deletTodo(todo.id)}
              className="btn btn-danger"
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
}
