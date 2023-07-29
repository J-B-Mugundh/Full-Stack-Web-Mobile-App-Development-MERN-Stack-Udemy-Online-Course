import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <BrowserRouter>
        <div>
            <Navbar/>
            <Routes>
            {/*Route elements, by default have history properties*/}
            <Route exact path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/contact" element={<Contact/>} />
            </Routes>
        </div>
      </BrowserRouter>
  );
}

export default App;
