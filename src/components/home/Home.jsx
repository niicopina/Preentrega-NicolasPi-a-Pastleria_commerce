import React from 'react'
import './home.css'
import { Button, ButtonGroup } from '@chakra-ui/react'

const Home = () => {
  return (
    <div>
      <div className="home welcome" id="home">
        <div className="home-text">
            <h1><span>Bienvenid@s </span>Pastelería Casera</h1>
            <p>Nos especializamos en pastelería artesanal y tortas decoradas</p>
            <Button colorScheme='teal' size='sm'>Mira el Menu</Button>
        </div>

        <div className="home-img">
            <img src="./src/assets/cheesecacke2.jpg" alt="cheesecake"/>
        </div>
    </div>
    </div>
  )
}

export default Home