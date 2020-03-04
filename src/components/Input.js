/** @jsx jsx */
import React, { useState, useContext } from "react";
import { css, jsx, keyframes } from "@emotion/core";
import { TodoContext } from "../context/TodoContext";
import moment from "moment";
const spin = keyframes`
        to { transform : rotateY(180deg);
        }
`;
const Search = () => {
  const [todo, setTodo] = useState("");
  const { dispatch } = useContext(TodoContext);
  // console.log(dispatch);
  const handleChange = e => {
    setTodo(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!todo) return;

    console.log(todo.task);

    dispatch({
      type: "ADD_TODO",
      todo
    });

    console.log(todo);

    setTodo("");
  };

  return (
    <div
      css={css`
        /* margin: 0 auto; */
        display: block;
        margin: 20px auto;
        width: 50%;
        background: #e2e2e2;

        text-align: center;
        @media (min-width: 300px) {
          width: 400px;
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
              /* height: 120px; */
              width: 40vw;
              /* border: none; */

              /* border-radius: 100%; */
              @media (min-width: 300px) {
                width: 150px;
                padding: 10px;
                box-sizing: border-box;
                border: none;
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
