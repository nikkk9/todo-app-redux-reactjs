const initialState = {
  todoList: [],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      // console.warn("reducer", action);
      const { id, data } = action.payload;
      return {
        ...state,
        todoList: [
          ...state.todoList,
          {
            id: id,
            data: data,
          },
        ],
      };
    case "REMOVE_TODO":
      const newList = state.todoList.filter(
        (item) => item.id !== action.payload.id
      );
      return {
        ...state,
        todoList: newList,
      };

    case "REMOVE_ALL_TODO":
      return {
        todoList: [],
      };

    default:
      return state;
  }
};

export default todoReducer;
