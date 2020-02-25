/** @jsx jsx */
import React, { useState } from "react";
import { css, jsx, keyframes } from "@emotion/core";

const spin = keyframes`
        to { transform : rotateY(180deg);
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
        background: #e2e2e2;

        @media (min-width: 300px) {
          width: 200px;
          margin-bottom: 10px;
        }
        background: -moz-linear-gradient(
          top,
          #e2e2e2 0%,
          #dbdbdb 50%,
          #d1d1d1 51%,
          #fefefe 100%
        );
        background: -webkit-linear-gradient(
          top,
          #e2e2e2 0%,
          #dbdbdb 50%,
          #d1d1d1 51%,
          #fefefe 100%
        );
        background: linear-gradient(
          to bottom,
          #e2e2e2 0%,
          #dbdbdb 50%,
          #d1d1d1 51%,
          #fefefe 100%
        );
        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#e2e2e2', endColorstr='#fefefe',GradientType=0 );

        padding: 4%;
        /* border: 2px solid red; */
        text-align: center;
        box-shadow: 2px 2px 2px #888888;
      `}
    >
      <h5
        css={css`
          animation: 3s ${spin} infinite;
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
              color: black;
              text-align: center;
              font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
              margin: 5px;
              border: none;
              /* border-radius: 100%; */
              @media (min-width: 300px) {
                width: 80px;
              }
            `}
          />
        </label>

        <button
          css={css`
            color: white;
            background-color: black;
            width: 80px;
            border-radius: 36px;
            border: none;
            padding: 5px;
            @media (min-width: 300px) {
              width: 101px;
              /* border: 2px solid blue; */
            }
          `}
        >
          Add todo
        </button>
      </form>
    </div>
  );
};

export default Search;
