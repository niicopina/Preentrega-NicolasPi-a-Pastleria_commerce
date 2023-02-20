import React from 'react'
import NavBar from './components/navbar/NavBar'
import ItemListContainer from './components/ItemListContainer'
import Home from './components/home/Home'
import About from './components/about/About'
import Footer from './components/Footer'
import Contact from './components/contact/Contact'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const App = () => {

  return (
    <div>
      
      <BrowserRouter>
        <NavBar />
        
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/home" element={<Home/>} />
          <Route exact path="/about" element={<About/>}/>
          <Route exact path="/contact" element={<Contact/>}/>
          <Route exact path="/menu" element={<ItemListContainer/>}/>
        </Routes>

       <Footer />
      </BrowserRouter>
    </div>
  )
}
export default App



{/* <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route exact path="/" element={<About />}/>
          <ItemListContainer />
        </Routes> */}
