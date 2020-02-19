/** @jsx jsx */
import React, { useState } from "react";
import { css, jsx } from "@emotion/core";
import Header from "../src/components/layouts/Header";
import Search from "../src/components/Input";
import Items from "../src/components/Items";
import moment from "moment";
const App = () => {
  let itemState = JSON.parse(localStorage.getItem("items"));
  itemState = itemState ? itemState : [];
  // eslint-disable-next-line no-unused-vars
  const [items, setItems] = useState(itemState);

  // receives data from child(Search)
  const UpdateTodos = todo => {
    const newTodo = {
      id: items.length + 1,
      task: todo,
      completed: false,
      createdAt: moment(Date.now())
        .add(24, "hours")
        .format("LLL")
    };
    localStorage.setItem("items", JSON.stringify([...itemState, newTodo]));
    setItems([...itemState, newTodo]);
  };

  const removeTodo = index => {
    const todoArr = [...items];
    todoArr.splice(index, 1);
    alert("Are you sure you wanna do this?");
    localStorage.setItem("items", JSON.stringify(todoArr));
    setItems(todoArr);
  };

  const completedTodo = index => {
    const newList = items.map(list => {
      if (list.id === index) {
        list.completed = !list.completed;
      }

      return list;
    });
    localStorage.setItem("items", JSON.stringify(newList));
    setItems(newList);
  };
  console.log(items.length);
  return (
    <div className="App">
      <Header />
      <div
        css={css`
          margin: 0 auto;
          width: 60%;
          background: #7d7e7d;
          background: -moz-linear-gradient(top, #7d7e7d 0%, #0e0e0e 100%);
          background: -webkit-linear-gradient(top, #7d7e7d 0%, #0e0e0e 100%);
          background: linear-gradient(to bottom, #7d7e7d 0%, #0e0e0e 100%);
          filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#7d7e7d', endColorstr='#0e0e0e',GradientType=0 );
        `}
      >
        <Search UpdateTodos={UpdateTodos} />
        <div
          css={css`
            /* border: 1px solid green; */
            display: flex;
            flex-flow: row wrap;
            justify-content: space-around;
            align-items: center;
            grid-auto-rows: auto;
            padding: 2%;
          `}
        >
          {items.map((item, index) => (
            <Items
              item={item}
              key={index}
              index={index}
              removeTodo={removeTodo}
              completedTodo={completedTodo}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
