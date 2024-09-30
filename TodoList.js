import React from "react";
import { useTodos } from "./useTodos";

const TodoList = () => {
  const { todos, deleteTodo, toggleDone, setEditTodo, setEditData } =
    useTodos();

  return (
    <ul>
      {todos.map((eachTodo) => (
        <li key={eachTodo.id}>
          {eachTodo.done ? <strike>{eachTodo.value}</strike> : eachTodo.value}
          <button onClick={() => deleteTodo(eachTodo.id)}>Delete</button>
          <button onClick={() => toggleDone(eachTodo.id)}>
            {eachTodo.done ? "Undone" : "Done"}
          </button>
          <button
            onClick={() => {
              setEditTodo(eachTodo.id); 
              setEditData({ [eachTodo.id]: eachTodo.value }); 
            }}
          >
            Edit
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
