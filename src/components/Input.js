/** @jsx jsx */
import React, { useState } from "react";
import { css, jsx, keyframes } from "@emotion/core";

const spin = keyframes`
        to{ transform : rotateYs(180deg);
        }
`;
const Search = ({ UpdateTodos }) => {
  const [todo, setTodo] = useState("");

  const handleChange = e => {
    setTodo(e.target.value);
  };

  const resetTodo = () => {
    setTodo("");
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!todo) return;
    // console.log(todo);
    addTodo(todo);
    setTodo("");
    resetTodo();
  };

  const addTodo = text => {
    // passing data(text) to the parent(App)
    UpdateTodos(text);
  };

  return (
    <div
      css={css`
        /* margin: 0 auto; */
        display: block;
        margin: 20px auto;
        width: 30%;
        background-image: linear-gradient(to right, #93f2e8, #67d6cc);
        padding: 4%;
        /* border: 2px solid red; */
        text-align: center;
        box-shadow: 2px 2px 2px #888888;
      `}
    >
      <h5
        css={css`
          animation: 1s ${spin} linear linear;
          color: #f2b9b3;
          font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
          padding: 2px;
        `}
      >
        Hello Todo
      </h5>
      <form
        onSubmit={handleSubmit}
        css={css`
          padding: 2%;
          color: #fff;
        `}
      >
        <label
          css={css`
            font-style: italic;
            font-weight: 500;
            padding: 3px;
            margin-right: 5px;
          `}
        >
          Add todo :
          <input
            value={todo}
            onChange={handleChange}
            onFocus={handleChange}
            css={css`
              padding: 5px;
              font-size: 14px;
              color: #fff;
              font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
              background-image: linear-gradient(to right, #40caed, aqua);
              margin: 5px;
            `}
          />
        </label>

        <button
          css={css`
            color: white;
            background-color: salmon;
            width: 80px;
            border-radius: 36px;
            border: none;
            padding: 5px;
          `}
        >
          Add todo
        </button>
      </form>
    </div>
  );
};

export default Search;
