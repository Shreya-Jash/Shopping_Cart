import React from "react";
import Data from "./Data";


export default function Products({item ,handleClick}) {
  const {id,
    img,
    tool_name,
    price,
    quantity}=item
  return (
    <div className="item-container">
      <img className="item-img"
          src={`../Images/${item.img}`} 
      />
      <div className="item-description">
      <p className="item-toolname" >{item.tool_name}</p>
      <p className="item-price">Price- ₹ {item.price}</p>
      <p className="item-quantity">Quantity per pack-{item.quantity}</p>
      </div>
      <button className="button" onClick={() => handleClick(item)} >Add to cart</button>
    </div>
  )
}
