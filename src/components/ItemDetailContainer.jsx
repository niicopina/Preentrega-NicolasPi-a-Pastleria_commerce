import React from 'react'
import ItemDetail from "./itemdetail/ItemDetail";
import Data from "../data.json";

const ItemDetailContainer = () => {
    return <>
    <ItemDetail prods={Data} />
    </>    
}

export default ItemDetailContainer