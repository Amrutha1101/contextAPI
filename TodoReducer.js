// src/TodoReducer.js
export const TODO_CONSTS = {
  ADD_TODO: "ADD_TODO",
  DELETE_TODO: "DELETE_TODO",
  DONE_TODO: "DONE_TODO",
  EDIT_TODO: "EDIT_TODO",
  EDIT_TODO_SET: "EDIT_TODO_SET",
};

export const TodoReducer = (state, action) => {
  switch (action.type) {
    case TODO_CONSTS.ADD_TODO:
      return [
        ...state,
        { value: action.payload.value, id: action.payload.id, isEdit: false },
      ];
    case TODO_CONSTS.DELETE_TODO:
      return state.filter((eachTodo) => eachTodo.id !== action.payload);
    case TODO_CONSTS.DONE_TODO:
      return state.map((eachTodo) => {
        if (action.payload === eachTodo.id) {
          return { ...eachTodo, done: !eachTodo.done };
        }
        return eachTodo;
      });
    case TODO_CONSTS.EDIT_TODO_SET:
      return state.map((eachTodo) => {
        if (action.payload === eachTodo.id) {
          return { ...eachTodo, isEdit: true };
        }
        return eachTodo;
      });
    case TODO_CONSTS.EDIT_TODO:
      return state.map((eachTodo) => {
        if (action.payload.id === eachTodo.id) {
          return {
            ...eachTodo,
            value: action.payload.value,
            isEdit: false,
          };
        }
        return eachTodo;
      });
    default:
      throw Error("Unknown action: " + action.type);
  }
};
