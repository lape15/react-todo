/** @jsx jsx */
import React, { useState } from "react";
import { css, jsx } from "@emotion/core";

const Search = props => {
  const [todo, setTodo] = useState("");

  const handleChange = e => {
    setTodo(e.target.value);
  };

  const resetTodo = () => {
    setTodo("");
  };
  const addTodo = todo => {
    if (todo !== "");
    props.todos(todo);
    // props.newTodo(todo);
    resetTodo();
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
      <form
        onSubmit={e => e.preventDefault()}
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

        <button onClick={addTodo}>Add todo</button>
      </form>
    </div>
  );
};

export default Search;
