import {createContext, useState} from 'react'

export const CartContext = createContext(null);

import React from 'react'

const ShoppingCartContextProvider = ({children}) => {

  const [cart, setCart]= useState([]);

  return (
    <CartContext.Provider value={{cart, setCart}}>
      {children}
      </CartContext.Provider>

  )
}

export default ShoppingCartContextProvider

/* import {useState} from 'react'
import { CounterContext } from './counterContext'

const StateComponent = ({children}) => {

    const [counter, setCounter]=useState(0)

    const increment =()=>{
        setCounter(counter + 1);
    };
    const decrement =()=>{
        setCounter(counter - 1)
    };

  return (
    <CounterContext.Provider 
        value={{counter, increment, decrement}}>
        {children}
    </CounterContext.Provider>
  )
}

export default StateComponent */