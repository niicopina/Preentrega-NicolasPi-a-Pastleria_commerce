import React from 'react'
import './about.css'

const About = () => {
  return (
    <div>
      <div className="about" id="about">
        <div className="about-img">
            <img src="/assets/logo.jpg" alt="logo" />
        </div>
        <div className="about-text">
            <h2>Desde 2012  superando expectativas </h2>
            <p> Comenzamos el recorrido enfocadas en la pastelería, así nuestra experiencia año tras año
            se eleva para continuar buscando sabores elevados logrando una consitencia en el Servicio
            que desumbra a cada cliente </p>
            <a href="./menu.html" class="btn" id="btn">Haz tu pedido</a>
        </div>
      </div>
    </div>
  )
}

export default About