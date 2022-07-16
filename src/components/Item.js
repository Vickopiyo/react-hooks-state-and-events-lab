
import React,  { useState } from "react";

function Item({ name, category }) {
  const [addedToCart, setAddedToCart]=useState(false)
  const addToCart = ()=> {
    setAddedToCart((isAddedToCart)=> !isAddedToCart)
  }
  return (
    <li className={addedToCart ? "addedToCart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={addedToCart ? "remove" : "add"}
      onClick={addToCart}
      >{addedToCart ? "Remove From" : "Add to"}Cart</button>
    </li>
  );
}

export default Item;
