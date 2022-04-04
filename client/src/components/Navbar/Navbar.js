import React from 'react'
import {NavLink}from "react-router-dom";
import "../../css/Navbar/Navbar.css"
export default function Navbar() {
  return (
    <div className='nav'>
    <ul>
      <li><NavLink to="/" >HOME</NavLink>  </li>
      <li><NavLink to="/orders" >ORDER</NavLink>  </li>
    </ul>
  </div>
  )
}
