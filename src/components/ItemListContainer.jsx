import React from 'react'
import Data from '../data.json'
import { useState, useEffect } from 'react'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'
import { Heading, Center } from "@chakra-ui/react";

const ItemListContainer = () => {
  const { category } = useParams();
  const catFilter = Data.filter((prod) => prod.category === category);

  return (
    <div className="categorias-titulo">
      <Center bg="tomato" h="120px" color="black" display="flex" alignItems="center">
        <Heading as="h2" size="2xl">
          Menu
        </Heading>
      </Center>
        {category ? <ItemList prods={catFilter} /> : <ItemList prods={Data} />}
    </div>
  )
}

export default ItemListContainer