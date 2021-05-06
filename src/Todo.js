import React from "react";
import { ACTIONS } from "./App";

const Todo = ({ todo, dispatch }) => {
  return (
    <>
      <li>
        <p style={{ color: todo.complete ? "#AAA" : "#000" }}>{todo.name}</p>
        <button
          onClick={() =>
            dispatch({
              type: ACTIONS.TOGGLE_TODO,
              payload: { id: todo.id },
            })
          }
        >
          toggle
        </button>
        <button
          onClick={() =>
            dispatch({
              type: ACTIONS.DELETE_TODO,
              payload: { id: todo.id },
            })
          }
        >
          delete
        </button>
      </li>
    </>
  );
};

export default Todo;
