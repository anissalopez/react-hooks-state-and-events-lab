import React, { useState } from "react";

function Item({ name, category }) {

  const [cart, setCart] = useState("")
  let text = cart === "" ? `Add to Cart` : `Remove from Cart`
  let buttonClass = cart === "" ? "add" : "remove"

  function addToCart(){
  
   return(setCart((cart) => cart === "" ?  `in-cart` : "")) 

  }
  return (
    <li className={cart}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={buttonClass} onClick={addToCart}>{text}</button>
    </li>
  );
}

export default Item;
