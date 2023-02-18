import React from 'react'
import Item from './Item'

const ItemList = ({prod}) => {
  return (
    <div>
        <div className="card-body">
            {prod?.map((prod)=> (
                <Item
                key={prod.id}
                id={prod.id}
                name={prod.name}
                description={prod.description}
                price={prod.price}
                stock={prod.stock}
                category={prod.category}
                />
            ))}

        </div>
    </div>
  )
}

export default ItemList