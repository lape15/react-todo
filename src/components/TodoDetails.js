import React from "react";
import { css, jsx } from "@emotion/core";
const TodoDetails = ({ item, index, completeTodo, removeTodo }) => {
  const handelCompletedTodo = () => {
    completeTodo(item.id);
  };
  return (
    <div className="list">
      <span
        className="comp"
        style={{ textDecoration: item.completed ? "line-through" : "" }}
        css={css`
          color: white;
        `}
      >
        <label htmlFor="">Completed </label>
        <input
          type="checkbox"
          css={css`
            border: none;
            border-radius: 30px;
            color: red;
          `}
          onChange={handelCompletedTodo}
          disabled={item.completed ? true : false}
          checked={item.completed ? true : false}
        />
      </span>

      <span
        className="task"
        css={css`
          margin: 0 0 0 4rem;
          color: white;
          font-weight: 500;
        `}
      >
        {item.task}
      </span>
      <span
        css={css`
          color: white;
          font-size: 0.9rem;
          margin-left: 35px;
          text-align: center;
          border: 2px solid red;
        `}
      >
        <strong>Created:</strong>
        {item.createdAt}
      </span>
      <i
        className="far fa-trash-alt"
        onClick={removeTodo}
        css={css`
          margin-left: 10px;
          /* float: right; */
        `}
      ></i>
    </div>
  );
};

export default TodoDetails;
