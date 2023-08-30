import React from 'react'
import {Link} from 'react-router-dom'
import { useAuth } from './Components/auth'
const Navbar = () => {
     const auth=useAuth()




  return (
    <div>
       <nav className='nav'>
        <Link to="/"><button className='home'>Home</button></Link>
       
        <Link to="products"><button className='home'>Products</button></Link>
        <Link to="/cart"><button>cart</button></Link>
        <Link to="/profile"><button>Profile</button></Link>
          {!auth.user && (
              <Link to="Login"><button className='home'>Login</button></Link>

          )
          }

          


      </nav>
    </div>
  )
}

export default Navbar
