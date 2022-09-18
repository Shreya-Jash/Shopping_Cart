import React from 'react'
import Products from '../components/Products'
import Data from '../components/Data'
import "../components/Product.css"

export default function Home({handleClick}) {

  
  return (
    <div>
      <section className='item-list'>
      {Data.map((item) =>(
          <Products 
              key={item.id}
              item={item}
              handleClick={handleClick}
            />
      ))}
      </section>
    </div>

  )
}
