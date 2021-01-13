import React from 'react'
import carrito from '../imagenes/carrito.svg';
import {NavLink} from 'react-router-dom'

const CartWidget = () => {
    return (
        <>
            <NavLink to="/carrito"><img src={carrito} alt="carrito" width="20px"/></NavLink>         
        </>
    )
}

export default CartWidget
