import React from 'react'
import Products from '../components/Products'

import Data from '../components/Data'
import "../components/Product.css"

export default function Home() {
  const products = Data.map(item =>
    {
      return (
        <Products 
          key={item.id}
          item={item}
        />
      )
    })
  return (
    <div>
      <section className='item-list'>
        {products}
      </section>
    </div>

  )
}
