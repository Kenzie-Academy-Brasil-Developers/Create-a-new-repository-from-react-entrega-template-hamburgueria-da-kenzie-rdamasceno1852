import React from 'react'
import CartProduct from './CartProduct'
import CartTotal from './CartTotal'
import { ShoppingCart } from './style'

const Cart = ({currentSale, deleteCard, deleteTotal}) => {  

  return (
    <ShoppingCart>
      <div className='div1'>
        <h3>Carrinho de compras</h3>
      </div>
      {currentSale.length ? (
        <div className='div2'>
        <ul>
            <CartProduct currentSale={currentSale} deleteCard={deleteCard}/>
        </ul>
            <CartTotal currentSale={currentSale} deleteTotal={deleteTotal} deleteCard={deleteCard}/>
        </div>
        ) : (
          <div className='div3'>
            <h3>Sua sacola está vazia</h3>
            <p>Adcione Itens</p>  
          </div>

          )}
      </ShoppingCart>
  )
}

export default Cart