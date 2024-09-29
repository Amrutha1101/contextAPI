// src/TodoForm.js
import React, { useState, useEffect } from "react";
import { useTodos } from "./useTodos";

const TodoForm = () => {
  const { addTodo, editData, setEditData, editTodo, todos, setEditTodo } =
    useTodos();
  const [inputData, setInputData] = useState("");

  // Whenever editData changes, update the input field
  useEffect(() => {
    if (Object.keys(editData).length > 0) {
      setInputData(editData[Object.keys(editData)[0]]); // Set the input data to the edit value
    }
  }, [editData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!Object.keys(editData).length) {
      // Add new todo
      addTodo(inputData);
      setInputData(""); // Clear input field
    } else {
      // Update existing todo
      const todoId = Object.keys(editData)[0];
      editTodo(todoId, inputData);
      setEditData({}); // Clear the edit data after update
      setInputData(""); // Clear input field
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) => setInputData(e.target.value)}
          value={inputData}
          placeholder="Enter a task"
        />
        <button type="submit">
          {Object.keys(editData).length ? "Update Todo" : "Add Todo"}
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
