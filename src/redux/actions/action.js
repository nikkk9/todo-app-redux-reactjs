export const addTodo = (data) => {
  // console.warn("action", data);
  return {
    type: "ADD_TODO",
    payload: {
      id: new Date().valueOf(),
      data: data,
    },
  };
};
export const removeTodo = (id) => {
  return {
    type: "REMOVE_TODO",
    payload: {
      id,
    },
  };
};
export const removeAllTodo = () => {
  return {
    type: "REMOVE_ALL_TODO",
  };
};
