import React, { useState } from "react";
import classes from "./Todo.module.css";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, removeAllTodo, removeTodo } from "../redux/actions/action";

const Todo = () => {
  const [todo, setTodo] = useState("");

  const list = useSelector((state) => state.todoReducer.todoList);

  const dispatch = useDispatch();
  return (
    <div className={classes.todo}>
      <div className={classes.container}>
        <h2>TODO WITH REDUX</h2>
        <div className={classes.inpContainer}>
          <input
            type="text"
            placeholder="Write something..."
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
          <span onClick={() => dispatch(addTodo(todo), setTodo(""))}>ADD</span>
        </div>
        {list.map((item) => {
          return (
            <div className={classes.valueContainer} key={item.id}>
              <span>{item.data}</span>
              <span onClick={() => dispatch(removeTodo(item.id), setTodo(""))}>
                DELETE
              </span>
            </div>
          );
        })}
        <p onClick={() => dispatch(removeAllTodo())}>REMOVE ALL</p>
      </div>
    </div>
  );
};

export default Todo;
