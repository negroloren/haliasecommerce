import React from 'react';
import {NavLink} from 'react-router-dom'
// Componente de tipo Flecha

const NavBarFooter = () => {

  return (
        <ul className="menu">
          <li className="icon">
            <NavLink to="/elementos">Elementos</NavLink>
          </li>
          <li className="icon">
            <NavLink to="/contacto" title="Contacto">Contacto</NavLink>
          </li>
          <li className="icon">
            <NavLink to="/blog" title="Blog">Blog</NavLink>
          </li>
        </ul>
  )
}

  export default NavBarFooter;