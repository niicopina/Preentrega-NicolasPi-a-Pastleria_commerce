import React from 'react'
import {createContext, useContext, useState} from 'react'


const cartContext = createContext();

export const {Provider} = cartContext;

export const useCartContext = () => {
    return useContext(cartContext);
}