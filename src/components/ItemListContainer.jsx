import React from 'react'
import Data from '../data.json'
import { useState } from 'react'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'
import { Center, Button } from "@chakra-ui/react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const ItemListContainer = () => {
  //const { category } = useParams();
  const [category, setCategory] = useState('');
  const catFilter = Data.filter((prod) => prod.category === category);
  

  const handleChange = (event) => {
    setCategory(event.target.value);
  };
  return (
    <div className="categorias-titulo">
      <Center bg="tomato" h="120px" color="black" display="flex" alignItems="center">
        <Menu>
          <MenuButton as={Button} value={category} onChange={handleChange}>
            Filtrar MENU por categorías
          </MenuButton>
          <MenuList>
              <MenuItem >Pasteles</MenuItem>    
              <MenuItem>Muffins</MenuItem>
              <MenuItem>Festivos</MenuItem>
              <MenuItem>Personalizados</MenuItem>
          </MenuList>
          
        </Menu>
      </Center>
      {category ? <ItemList prods={catFilter} /> : <ItemList prods={Data} />}
        
    </div>)
}
  


export default ItemListContainer