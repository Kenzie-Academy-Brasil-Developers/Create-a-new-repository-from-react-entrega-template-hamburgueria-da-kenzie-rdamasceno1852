import React from 'react'
import { Cards } from './style'
import Button from '../../Button'

const  Card = ({ products, currentSale, setCurrentSale }) => {

  const addCart =(product) =>{
   const sale = currentSale.filter((item) => item.id === product.id)
   sale.length > 0? (
    alert("Produto já inserido!")
   ) : (
     setCurrentSale([...currentSale, product])
   )
  }

  return (
    <>
        {products.map((item) => (
          <Cards key={item.id}>
            <div className='div1'>
            <img src={item.img} alt={item.name} />
            </div>
            <div className='div2'>
                <h3>{item.name}</h3>
                <p>{item.category}</p>
                <span>R$ {item.price}</span>
                <Button onclick={() => addCart(item)} name={'Adcionar'}/>
            </div>
        </Cards>
          ))}
    </>
  )
}

export default Card