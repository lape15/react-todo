import React, { useState } from "react";
import Header from "../src/components/layouts/Header";
import Search from "../src/components/Input";
import Item from "../src/components/Item";
const App = () => {
  const [items, setItems] = useState(["Sleep"]);
  console.log(items);

  // receives data from child(Search)
  const UpdateTodos = todo => {
    const UpdatedTodos = [...items, todo];
    setItems(UpdatedTodos);
  };

  return (
    <div className="App">
      <Header />
      <Search UpdateTodos={UpdateTodos} />
      {items.map((item, index) => (
        <Item item={item} key={index} />
      ))}
    </div>
  );
};

export default App;
