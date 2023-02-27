import React from 'react'
import Data from '../data.json'
import { useState, useEffect } from 'react'
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

const ItemListContainer = ({id}) => {
  const { category } = useParams();
  const catFilter = Data.filter((prod) => prod.category === category);

  return (
    <div className="categorias-titulo">
      <Center bg="tomato" h="120px" color="black" display="flex" alignItems="center">
        <Menu>
          <MenuButton as={Button} >
            Filtrar MENU por categorías
          </MenuButton>
          <MenuList>
            <Link to={`/item/${id}`}>
              <MenuItem>Pasteles</MenuItem>
            </Link>
    
              <MenuItem>Muffins</MenuItem>
              <MenuItem>Festivos</MenuItem>
              <MenuItem>Personalizados</MenuItem>
          </MenuList>
          
        </Menu>
      </Center>
      {category ? <ItemList prods={catFilter} /> : <ItemList prods={Data} />}
        
    </div>
  )
}

export default ItemListContainer