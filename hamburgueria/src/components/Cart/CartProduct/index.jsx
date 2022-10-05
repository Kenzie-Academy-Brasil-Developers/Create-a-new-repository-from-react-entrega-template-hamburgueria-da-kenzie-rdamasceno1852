import React from 'react'
import { CardCart } from './style';

const CartProduct = ({currentSale, deleteCard}) => {
  console.log(currentSale);
  return (
    currentSale.map((item) => (       
      <CardCart key={item.id}>
      <img src={item.img} alt={item.name} />
      <div className='div1'>
      <h3>{item.name}</h3>
      <p>{item.category}</p>
      </div>
      <button onClick={() => deleteCard(item)}>remover</button>
      </CardCart>
  ))
  )
}

export default CartProduct