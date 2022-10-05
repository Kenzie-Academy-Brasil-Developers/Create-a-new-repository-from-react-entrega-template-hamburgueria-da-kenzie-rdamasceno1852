/* eslint-disable no-restricted-globals */
import './App.css';
import Header from './components/Header';
import ProductList from './components/ProductList';
import api from './services/api'
import { useState, useEffect } from 'react'
import Cart from './components/Cart'
import GlobalStyle from './styles/Global';

function App() {
  const [loading, setLoading] = useState(false)
  
  const [products, setProducts] = useState([]);
  
  const [currentSale, setCurrentSale] = useState([]);
  
  const [filteredProducts, setFilteredProducts] = useState('')
  


const newFilter = products.filter(item => filteredProducts === "" ? true : item.name.toLowerCase().includes(filteredProducts.toLocaleLowerCase()) || item.category.toLowerCase().includes(filteredProducts.toLocaleLowerCase()))

  useEffect(() => {
    const getProducts = async () => {
      try {
        setLoading(true)
        const response = await api.get('products');
        setProducts(response.data)
      }
      catch (error) {
        console.log(error);
      } finally{
      setLoading(false)
    }
  }
  getProducts()
},[])

    const deleteCard = (selectedCard) => {
      console.log(selectedCard)
      const filtered = currentSale.filter((current, index) => {
        return current.id !== selectedCard.id
      })
      setCurrentSale(filtered) 
    }

    const deleteTotal = () => {
      setCurrentSale([])
    }


  return (
    <div className="App">
      <GlobalStyle/>
      <Header 
        setFilteredProducts={setFilteredProducts}/>
      <div className='container' >
      {loading ? (<h1>Carregando...</h1>) : (
        <ProductList 
        products={newFilter} 
        currentSale={currentSale} 
        setCurrentSale={setCurrentSale} />
        )}
        <Cart 
          currentSale={currentSale} 
          deleteTotal={deleteTotal} 
          deleteCard={deleteCard}
          />
      </div>

    </div>
  ); 
}

export default App;

