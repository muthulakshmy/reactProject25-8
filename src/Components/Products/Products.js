import React from 'react'
import {Link,Outlet} from 'react-router-dom'
const Products = () => {
  return (
    <div className='products'>
        <p>List of Produts</p>
        <div>
        <h1>Click to Add</h1>
        <Link to="/Products/List"><button className="add">Add</button></Link>
        </div>
        <Outlet/>
      
    </div>
  )
}

export default Products
