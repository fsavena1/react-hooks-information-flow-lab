import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import Header from './Header'
// import Filter from './Filter'

function App() {
  const [isDarkMode , setIsDarkMode] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");

  function onDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }


  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }
  

  console.log(selectedCategory)

  return (
    <div>
      <Header onDarkModeClick = {onDarkModeClick} isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
      {/* <Filter handleCategoryChange={handleCategoryChange}/> */}
      <ShoppingList items={itemData}  selectedCategory={selectedCategory} onCategoryChange={handleCategoryChange} />
    </div>
  );
}

export default App;
