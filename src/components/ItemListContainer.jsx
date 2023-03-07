import React from 'react'
import Data from '../data.json'
import { useState } from 'react'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'


const ItemListContainer = ({id}) => {

  const [prods, setProds] = useState([]);
  const {category} = useParams();

  const catFilter = Data.filter((prod) => prod.category === category);
  
  return (
       <>
      
      {category ? <ItemList prods={catFilter} /> : <ItemList prods={Data} />}
        
    </>)
}
export default ItemListContainer


{/* <Center bg="tomato" h="120px" color="black" display="flex" alignItems="center">
        <Menu>
          <MenuButton as={Button} >
            Filtrar MENU por categorías
          </MenuButton>
          <MenuList>
          <Link to={`/menu/${id}`}><MenuItem>Pasteles</MenuItem></Link>   
              <MenuItem>Muffins</MenuItem>
              <MenuItem>Festivos</MenuItem>
              <MenuItem>Personalizados</MenuItem>
          </MenuList>
          
        </Menu>
      </Center> */}