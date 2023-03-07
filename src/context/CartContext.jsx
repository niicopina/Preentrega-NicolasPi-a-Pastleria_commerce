import React from 'react'
import {createContext, useContext, useState} from 'react'


const CartContext = createContext();

export const {Provider} = CartContext;

export const useCartContext = () => {
    return useContext(CartContext);
}

/* 
si tengo prod a , b y c - importa el stock agregado pero no el que se descuenta

No seria bueno que haya dos lineas de cantidad de producto del mismo a por ejemplo:
a - 6
b -4
a- 2

que si aparezcan los totales que cada prod y del total de la compra

agregar formulario con info cliente para cuando este este de acuerdo con la compra, donde este form generara 
un id de su compra que se le dará al cliente. Si no hay prod en carro no se puede llenar el form


-
APRENDER!
hooks
memoizacion
react bases 
webpack
jsx
js
redux


 */