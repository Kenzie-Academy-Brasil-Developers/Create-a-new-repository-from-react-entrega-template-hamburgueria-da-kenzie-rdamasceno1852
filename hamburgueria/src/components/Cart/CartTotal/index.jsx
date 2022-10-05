import React from 'react'
import { Total } from './style'

const CartTotal = ({ currentSale, deleteTotal }) => {
    
    const total = currentSale.reduce((acc, currentValue) => {
        return currentValue.price + acc
    }, 0)

    console.log(total.toFixed(2))

  

    return (
    <Total>
      <div className='div'>
      <p>Total</p>
      <span>R$: {total.toFixed(2)} </span>
      </div>

      <button onClick={deleteTotal}>Remover Todos</button>
    </Total>
  )
}

export default CartTotal