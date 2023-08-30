import React from 'react'
import { useState } from 'react'
import {useAuth} from './auth.js'
import { useNavigate } from 'react-router-dom'


const Login = () => {
  const[user,setUser]=useState("")
  const auth= useAuth()
  const navigate =useNavigate()
  function handleLogin(){
     auth.login(user)
     navigate('/profile')
    
  }
  return (
    <div className='login'>

      <input type="text" onChange={(e)=>setUser(e.target.value)} placeholder='name'></input>
   
      <input type="password" placeholder='password'></input>
      <button onClick={handleLogin}>Login</button>
    </div>
  )
}

export default Login
