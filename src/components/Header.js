import React from 'react'
import logo from '../imagenes/halias-logo.png';
import NavBar from "./NavBar";
import {NavLink} from 'react-router-dom'
import Dolar from './Dolar';


const Header = () => {

    return (
        <header className="header">
            <NavLink exact to="/"><img src={logo} alt="halias" width="120" className="logo"/></NavLink>
            <div className="container_nav">
                <NavBar />
            </div>
            <Dolar/>
        </header>
    )
}

export default Header
