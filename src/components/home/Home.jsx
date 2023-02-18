import React from 'react'
import './home.css'

const Home = () => {
  return (
    <div>
      <div className="home welcome" id="home">
        <div className="home-text">
            <h1><span>Bienvenid@s </span>Pastelería Casera</h1>
            <p>Nos especializamos en pastelería artesanal y tortas decoradas</p>
            <a href="./menu.html" className="btn" id="btn">Haz tu pedido</a>
        </div>

        <div className="home-img">
            <img src="./src/assets/cheesecacke2.jpg" alt="cheesecake"/>
        </div>
    </div>
    </div>
  )
}

export default Home