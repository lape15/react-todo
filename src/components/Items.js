/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/core";

const Items = ({ item, index, removeTodo, completedTodo }) => {
  //   localStorage.getItem("items");
  console.log(item);
  return (
    <div
      css={css`
        display: flex;
        flex-flow: row wrap;
        justify-content: center;
        align-items: center;
        margin-bottom: 10px;
        flex-basis: 49%;
        border: none;
        flex: 2 1 1;
      `}
    >
      <div
        css={css`
          padding: 2%;
          border: 1px solid #424242;
          flex-basis: 99%;
          height: 25px;
          box-shadow: 0 0 2px 2px #f2e1e1;
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
          <button
            type="checkbox"
            css={css`
              border: none;
              border-radius: 30px;
            `}
            onClick={() => completedTodo(index)}
          >
            Completed{" "}
          </button>
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
            float: right;
          `}
        ></i>
      </div>
    </div>
  );
};

export default Items;
