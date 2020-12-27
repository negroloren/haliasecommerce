import React from 'react'
import logo from '../imagenes/halias-logo.png';
import NavBar from "./NavBar";
import ItemListContainer from "./ItemListContainer";
const Header = () => {
    return (
        <header className="header">
            <img src={logo} alt="halias" width="120" className="logo"/><h2>Tienda Halias</h2>
            <div className="container_nav">
                <NavBar/>
                <ItemListContainer greeting="Hola"/>
            </div>
        </header>
    )
}

export default Header
