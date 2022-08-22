import React from "react";



export default function Products(props) {
  return (
    <div className="item-container">
      <img className="item-img"
          src={`../Images/${props.item.img}`} 
      />
      <div className="item-description">
      <p className="item-toolname" >{props.item.tool_name}</p>
      <p className="item-price">Price- ₹ {props.item.price}</p>
      <p className="item-quantity">Quantity per pack-{props.item.quantity}</p>
      </div>
      <button className="button">Add to cart</button>
    </div>
  )
}
