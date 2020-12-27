import React from 'react'
import cart_icon from '../imagenes/cart_icon.png';

const CartWidget = () => {
    return (
        <a href="/carrito">
            <img src={cart_icon} alt="carrito" width="20px"/>            
        </a>
    )
}

export default CartWidget
