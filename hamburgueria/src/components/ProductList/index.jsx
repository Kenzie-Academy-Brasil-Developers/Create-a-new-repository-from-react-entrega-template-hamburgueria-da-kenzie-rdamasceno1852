import Card from "./Card"
import { Container, List } from "./style"


const ProductList = ({
    products,
    filteredProducts,
    setFilteredProducts,
    currentSale,
    setCurrentSale,
     addToCart}) => {
  
    return (
    <Container>
        <List>
            <Card products={products} add={addToCart} filteredProducts={filteredProducts} setFilteredProducts={setFilteredProducts} currentSale={currentSale}
    setCurrentSale={setCurrentSale}/>
        </List>
    </Container>
  )
}

export default ProductList