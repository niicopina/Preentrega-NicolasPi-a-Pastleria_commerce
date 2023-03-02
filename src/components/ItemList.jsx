import React from 'react'
import Item from './Item'
import { Container } from "@chakra-ui/react";

const ItemList = ({prods}) => {
  return (
    <div>
        <Container maxW="container.sm" className="main-catalogue">
            {prods?.map((prod)=> (
                <Item
                key={prod.id}
                id={prod.id}
                name={prod.name}
                description={prod.description}
                price={prod.price}
                stock={prod.stock}
                category={prod.category}
                image={prod.image}
                />
            ))}

        </Container>
    </div>
  )
}

export default ItemList