import Button from '../Button'
import { HeaderDiv } from './style'

const Header = ({ setFilteredProducts }) => {

// console.log(products)

  return (
    <HeaderDiv>
        <div className='div1'>
            <h2>Burguer</h2>
            <h3>Kenzie</h3>
        </div>

        <div className='div2'>
            <input 
                type="text" 
                placeholder='Digitar Pesquisa' 
                onChange={(event)=> setFilteredProducts(event.target.value)}  
            />
            <Button name={'Pesquisar'}/>
        </div>
    </HeaderDiv>
  )
}

export default Header
