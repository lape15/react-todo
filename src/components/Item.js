import React from "react";

const Item = ({ item }) => {
  console.log(item);

  const handleChecked = () => {};
  return (
    <div>
      <span>
        <label htmlFor="completed">Completed</label>
        <input type="checkbox" name="" id="completed" checked={handleChecked} />
      </span>
      {item}
    </div>
  );
};

// export default Item;
