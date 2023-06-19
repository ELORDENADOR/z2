import React from 'react'
import { Outlet } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
           <h2>Este es el navbar</h2>
            <ul>
                <li>Contacto</li>
                <li>favoritos</li>
                <li>algo mas</li>
            </ul>
            <Outlet />
    </div>
  )
}

export default Navbar;