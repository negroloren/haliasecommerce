import React from 'react';
import CartWidget from './CartWidget';

// Componente de tipo Flecha

const NavBar = () => {
  return (
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
          <li>
            <CartWidget/>
          </li>
        </ul>
  )
}


/*
// Componente de tipo Clase

Class NavBar extends React.Component {
  //  Método render se ejecuta cuando un componente entra en pantalla o cuando se actualiza
  render() {
    return (
      <header className="header">
        <img src={logo} alt="halias" width="120" className="logo"/><h2>Halias Shop</h2>
        <ul className="menu">
          <li>
            <a href="/destacados">
              <p>Destacados</p>
            </a>
          </li>
        </ul>
      </header>
    )
  }
}
*/

/*
// Componente de tipo function
function NavBar() {
    return (
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
    )
  }
  */
  export default NavBar;