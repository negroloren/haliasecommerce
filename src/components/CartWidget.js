import React, {useContext} from 'react'
import carrito from '../imagenes/carrito.svg';
import {NavLink} from 'react-router-dom'
import CartContext from './CartContext'

const CartWidget = () => {

    const { cantItems } = useContext(CartContext);

    return (
        <>
            <NavLink to="/carrito">
                <img src={carrito} alt="carrito" width="20px"/>
                { cantItems > 0 ? (  
                        <span className="cant_widgetCarrito">{cantItems}</span>
                    )
                    : (
                        <></>
                    )
                }
            </NavLink>         
        </>
    )
}

export default CartWidget
