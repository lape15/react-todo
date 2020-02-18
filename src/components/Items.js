/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/core";

const Items = ({ item, index, removeTodo }) => {
  //   localStorage.getItem("items");

  return (
    <div
      css={css`
        display: flex;
        flex-flow: row wrap;
        justify-content: center;
        align-items: center;
        margin-bottom: 10px;
        flex-basis: 45%;
        border: none;
        flex: 2 1 1;
      `}
    >
      <div
        css={css`
          padding: 5px;
          border: 1px solid #424242;
          flex-basis: 99%;
          height: 30px;

          box-shadow: 0 0 2px 2px #f2e1e1;
          background-color: #bcb7b7;
        `}
      >
        <i className="far fa-trash-alt" onClick={() => removeTodo(index)}></i>
        <span
          css={css`
            margin: 0 0 0 4rem;
            color: white;
            font-weight: 500;
          `}
        >
          {" "}
          {item}{" "}
        </span>
      </div>
    </div>
  );
};

export default Items;
