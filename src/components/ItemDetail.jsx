import React from 'react'

const ItemDetail = () => {
    const [contador, setContador] = useState(0);
  
  const sumar = () => {
    setContador (contador + 1);
  }
  return (
    <div>
        <p>{contador}</p>
      <button onClick={sumar}>Sumar</button>
      <button onClick={()=>{
        setContador(contador - 1);
        }}>Restart
      </button>
      <button onClick={()=>{
        setContador(0);
      }}>
        Reset
      </button>
    </div>
  )
}

export default ItemDetail