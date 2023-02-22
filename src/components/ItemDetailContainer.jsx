import React from 'react'
import ItemDetail from "./itemdetail/ItemDetail";
import { useState, useEffect } from "react";
import Data from "../data.json";

const ItemDetailContainer = () => {
    return <>
    <ItemDetail prods={Data} />
    </>    
}

export default ItemDetailContainer