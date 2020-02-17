import React, { useState } from "react";
import Header from "../src/components/layouts/Header";
import Search from "../src/components/Input";
import Item from "../src/components/Items";
const App = props => {
  const [items, setItems] = useState(["Sleep"]);
  console.log(items);

  const newTodo = todo => {
    const oldTodo = [...items, todo];
    setItems(oldTodo);
    // return items;
  };

  return (
    <div className="App">
      <Header />
      <Search todos={newTodo} />
      {items.map((item, index) => (
        <Item item={item} key={index} />
      ))}
    </div>
  );
};

export default App;
