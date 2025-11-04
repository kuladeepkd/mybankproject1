import React from 'react'
import './Navbar.css';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div className='navbar'>
      <ul className='nav-list'>
       <Link to='/Home'> <li>HOME</li></Link>
        <Link to='/Dashboard'> <li>DASHBOARD</li></Link>
        <Link to='/About'>  <li>ABOUT</li></Link>
        <Link to='/Registration'><li>LOGIN</li></Link>
        </ul>    
    </div>
  )
}

export default Navbar