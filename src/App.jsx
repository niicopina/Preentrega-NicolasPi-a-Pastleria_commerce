import React from 'react'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import Item from './components/Item'
import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'

const App = () => {

  const [contador, setContador] = useState(0);
  
  const sumar = () => {
    setContador (contador + 1);
  }

  return (
    <div>
      <BrowserRouter>
        <NavBar />
      
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route exact path="/" element={<About />}/>
          <ItemListContainer />
        </Routes>
      
        <Footer />
      </BrowserRouter>


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
