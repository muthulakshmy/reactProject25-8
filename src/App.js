

import React from 'react'
import { BrowserRouter as Router , Link, Routes, Route } from 'react-router-dom'

import Home from './Components/Home.js'
import Login from './Components/Login.js'
import Home1 from './Components/Home1.js'
import Products from './Components/Products/Products.js'


import Cart from './Cart.js'

const App = () => {
  return (
    <Router>
      <nav className='nav'>
        <Link to="/"><button className='home'>Home</button></Link>
        <Link to="Login"><button className='home'>Login</button></Link>
        <Link to="products"><button className='home'>Products</button></Link>
        <Link to="/cart"><button>cart</button></Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home1/>}/>
        <Route path="/cart" element={<Cart />} />
        <Route path="Login" element={<Login/>}/>
        <Route path="Products" element={<Products/>}>
          <Route path="List" element={<Home/>}/>
            <Route path='Add' element={<Home/>}/>
        </Route>
      </Routes>
    </Router>
  )
}

export default App
