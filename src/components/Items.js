/** @jsx jsx */
import React, { useContext } from "react";
import { css, jsx } from "@emotion/core";
import { TodoContext } from "../context/TodoContext";
import TodoDetails from "./TodoDetails";

const Items = () => {
  const { todos, dispatch } = useContext(TodoContext);
  console.log(todos);
  // const handleChecked = () => {
  //   completedTodo(item.id);
  //   console.log(index, item.id);
  // };

  // console.log(item);
  return todos.length ? (
    <div
      css={css`
        display: flex;
        flex-flow: row wrap;
        justify-content: space-around;
        align-items: center;
        flex-basis: 70%;
        margin-bottom: 10px;
        border: 1px solid black;
        padding: 2%;
        background-color: #fff;
        margin-top: 50px;
        margin-left: 10px;
      `}
    >
      {todos.map((item, index) => {
        console.log(item, item.id);
        return (
          <TodoDetails
            item={item}
            key={index}
            index={index}
            completeTodo={() =>
              dispatch({ type: "COMPLETED_TODO", index: item.id })
            }
            removeTodo={() => dispatch({ type: "REMOVE_BOOK", id: item.id })}
          />
        );
      })}
    </div>
  ) : (
    <div
      css={css`
        color: white;
      `}
    >
      {" "}
      <p
        className="listing"
        css={css`
          color: white;
          font-weight: 600;
        `}
      >
        You are getting lazy, You have no todo!!
      </p>
    </div>
  );
};

export default Items;
