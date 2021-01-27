import React, {useContext} from 'react'
import carrito from '../imagenes/carrito.svg';
import CartContext from './CartContext'

const CartWidget = () => {

    const { cantItems } = useContext(CartContext);

    return (
        <>
                <img src={carrito} alt="carrito" width="20px"/>
                { cantItems > 0 ? (  
                        <span className="cant_widgetCarrito">{cantItems}</span>
                    )
                    : (
                        <>
                        </>
                    )
                }
        </>
    )
}

export default CartWidget
