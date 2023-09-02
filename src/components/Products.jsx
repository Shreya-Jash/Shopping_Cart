import React,{useState} from "react";


export default function Products({item ,handleClick}) {
    
  return (
    <div className="item-container">
      <img className="item-img"
          src={`../Images/${item.img}`} alt="Product"
      />
      <div className="item-description">
      <p className="item-toolname" >{item.tool_name}</p>
      <p className="item-price">Price- ₹ {item.price}</p>
      <p className="item-quantity">Quantity per pack-{item.quantity}</p>
      </div>
      <button className="productButton bg-[#158272d0] w-28 text-[bisque] rounded-lg mb-2" onClick={() =>{ handleClick(item)}}>
        {console.log(handleClick)}
        Add item
      </button>
    </div>
  )
}
