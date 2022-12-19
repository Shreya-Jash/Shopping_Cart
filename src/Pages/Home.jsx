import React from 'react'
import Products from '../components/Products'
import Data from '../components/Data'
import "../styles/Product.css"
import Slider from '../components/Slider'

export default function Home({handleClick}) {

  
  return (
    <div>
      <Slider />
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
