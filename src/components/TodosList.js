import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodos } from "../features/todosSlice";

export default function TodosList() {
  const [task, setTask] = useState("");

  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  const handleClick = () => {
    if (task !== "") {
      dispatch(addTodos(task));
    }
    setTask("");
  };

  return (
    <div>
      <section>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button onClick={handleClick}>Add Todo</button>
      </section>
      <ul>
        {todos.map((todo) => {
          return <li key={todo.id}>{todo.task}</li>;
        })}
      </ul>
    </div>
  );
}
