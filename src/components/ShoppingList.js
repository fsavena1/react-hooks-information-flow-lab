// import React, { useState } from "react";
import Item from "./Item";
import Filter from "./Filter";

function ShoppingList({ items, selectedCategory, onCategoryChange }) {

  // function handleCategoryChange(event) {
  //   setSelectedCategory(event.target.value);
  // }


  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") return item;

    else { return item.category === selectedCategory;}
  });
console.log(itemsToDisplay)
  return (
    <div className="ShoppingList">
      <Filter onCategoryChange={onCategoryChange} />
      <div className="Filter"></div>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
