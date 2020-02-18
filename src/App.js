/** @jsx jsx */
import React, { useState } from "react";
import { css, jsx } from "@emotion/core";
import Header from "../src/components/layouts/Header";
import Search from "../src/components/Input";
import Items from "../src/components/Items";
const App = () => {
  let itemState = JSON.parse(localStorage.getItem("items"));
  itemState = itemState ? itemState : [];
  // eslint-disable-next-line no-unused-vars
  const [items, setItems] = useState(itemState);

  // receives data from child(Search)
  const UpdateTodos = todo => {
    localStorage.setItem("items", JSON.stringify([...itemState, todo]));
    setItems([...itemState, todo]);
  };

  const removeTodo = index => {
    const todoArr = [...items];
    todoArr.splice(index, 1);
    setItems(todoArr);
  };

  return (
    <div className="App">
      <Header />
      <Search UpdateTodos={UpdateTodos} />
      <div
        css={css`
          background-color: #dbd9d9;
          display: flex;
          flex-flow: row wrap;
          justify-content: space-around;
          align-items: center;
          padding: 2%;
        `}
      >
        {items.map((item, index) => (
          <Items
            item={item}
            key={index}
            index={index}
            removeTodo={removeTodo}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
