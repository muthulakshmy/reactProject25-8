

import React from 'react'
import { BrowserRouter as Router , Link, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './Components/auth.js'
import Home from './Components/Home.js'
import Login from './Components/Login.js'
import Home1 from './Components/Home1.js'
import Profile from './Components/Profile.js'
import Products from './Components/Products/Products.js'
import Navbar from './Navbar.js'



import Cart from './Cart.js'
import RequireAuth from './Components/RequireAuth.js'

const App = () => {
  return (
    <AuthProvider>
    <Router>
     <Navbar/>
      <Routes>
        <Route path="/" element={<RequireAuth><Home1/></RequireAuth>}/>
        <Route path="/cart" element={<RequireAuth><Cart /></RequireAuth>} />
        <Route path="Login" element={<Login/>}/>
        <Route path="profile" element={<RequireAuth><Profile/></RequireAuth>}/>
        <Route path="Products" element={<RequireAuth><Products/></RequireAuth>}>
          <Route path="List" element={<RequireAuth><Home/></RequireAuth>}/>
            <Route path='Add' element={<RequireAuth><Home/></RequireAuth>}/>
        </Route>
      </Routes>
    </Router>
    </AuthProvider>
  )
}

export default App
