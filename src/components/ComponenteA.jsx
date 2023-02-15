import React from 'react'

const ComponenteA = ({props, numero, isUser, comision, tomarValor}) => {
    /* console.log(props);
    console.log(numero);
    console.log(isUser); */

    const valorRandom = Math.random() * 10;

    /* tomarValor(valorRandom); */
  return (
    <div>ComponenteA</div>
  )
}

export default ComponenteA