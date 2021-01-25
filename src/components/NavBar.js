import React from 'react';
import CartWidget from './CartWidget';
import {NavLink} from 'react-router-dom'
import CategoryFilter from './CategoryFilter';
import cuenta from '../imagenes/user.svg'
import ofertas from '../imagenes/descuento.svg'
// Componente de tipo Flecha

const NavBar = () => {

  return (
        <ul className="menu">
          <CategoryFilter/>
          <li className="icon">
            <NavLink to="/ofertas" title="Ofertas"><img src={ofertas} alt="ofertas" width="20px"/></NavLink>
          </li>
          <li className="icon">
            <NavLink to="/carrito" title="Carrito"><CartWidget/></NavLink>
          </li>
          <li className="icon">
            <NavLink to="/mi-cuenta" title="Mi cuenta"><img src={cuenta} alt="mi-cuenta" width="20px"/></NavLink>
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