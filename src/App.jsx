import React from 'react'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ComponenteA from './components/ComponenteA'
import Item from './components/Item'
import { useState } from 'react'

const App = () => {

  const [contador, setContador] = useState(0);
  
  const sumar = () => {
    setContador (contador + 1);
  }

  return (
    <div>
      


      <NavBar />
      <ItemListContainer />
      <ComponenteA >
        numero= {5}
        isUser= {true}
      </ComponenteA>
      <p>{contador}</p>
      <button onClick={sumar}>Sumar</button>
      <button onClick={()=>{
        setContador(contador - 1);
        }}>Restar
      </button>
      <button onClick={()=>{
        setContador(0);
      }}>
        Reset
      </button>
    </div>
  )
}
export default App
