import React from 'react';
import logo from '../imagenes/halias-logo.png';

function NavBar() {
    return (
      <>
        <header className="header">
          <img src={logo} alt="halias" width="120" className="logo"/><h2>Halias Shop</h2>
          <ul className="menu">
            <li>
              <a href="/destacados">
                <p>Destacados</p>
              </a>
            </li>
            <li>
              <a href="/productos">
                <p>Productos</p>
              </a>
            </li>
            <li>
              <a href="/ofertas">
                <p>Ofertas</p>
              </a>
            </li>
          </ul>
        </header>
      </>
    );
  }
  
  export default NavBar;