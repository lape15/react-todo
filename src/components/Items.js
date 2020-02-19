/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/core";

const Items = ({ item, index, removeTodo, completedTodo }) => {
  //   localStorage.getItem("items");
  const handleChecked = () => {
    // console.log(item.id);
    completedTodo(item.id);
    console.log(index, item.id);
  };

  // console.log(item);
  return (
    <div
      css={css`
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
        align-items: center;
        flex-basis: 70%;
        margin-bottom: 10px;
        border: 1px solid black;
        padding: 2%;
        background-color: #fff;
      `}
    >
      <span
        style={{ textDecoration: item.completed ? "line-through" : "" }}
        css={css`
          color: black;
          margin-right: 20px;
          /* float: right; */
        `}
      >
        <label htmlFor="">Completed </label>
        <input
          type="checkbox"
          css={css`
            border: none;
            border-radius: 30px;
          `}
          onChange={handleChecked}
          disabled={item.completed ? true : false}
        />
      </span>

      <span
        css={css`
          margin: 0 0 0 4rem;
          color: black;
          font-weight: 500;
        `}
      >
        {" "}
        {item.task}{" "}
      </span>
      <span
        css={css`
          color: black;
          font-size: 0.9rem;
          margin-left: 35px;
          text-align: center;
        `}
      >
        Made:{item.createdAt}
      </span>
      <i
        className="far fa-trash-alt"
        onClick={() => removeTodo(index)}
        css={css`
          /* margin-left: 190px; */
          /* float: right; */
        `}
      ></i>
    </div>
  );
};

export default Items;
