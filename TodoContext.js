
import React, { createContext, useReducer, useState } from "react";
import { TodoReducer, TODO_CONSTS } from "./TodoReducer";
export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [todos, dispatchTodos] = useReducer(TodoReducer, []);
  const [editData, setEditData] = useState({});

  const addTodo = (value) => {
    dispatchTodos({
      type: TODO_CONSTS.ADD_TODO,
      payload: { value, id: Math.random() },
    });
  };

  const deleteTodo = (id) => {
    dispatchTodos({
      type: TODO_CONSTS.DELETE_TODO,
      payload: id,
    });
  };

  const toggleDone = (id) => {
    dispatchTodos({
      type: TODO_CONSTS.DONE_TODO,
      payload: id,
    });
  };

  const setEditTodo = (id) => {
    dispatchTodos({
      type: TODO_CONSTS.EDIT_TODO_SET,
      payload: id,
    });
  };

  const editTodo = (id, value) => {
    dispatchTodos({
      type: TODO_CONSTS.EDIT_TODO,
      payload: { id, value },
    });
  };

  return (
    <TodoContext.Provider
      value={{
        todos,
        editData,
        setEditData,
        addTodo,
        deleteTodo,
        toggleDone,
        setEditTodo,
        editTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
