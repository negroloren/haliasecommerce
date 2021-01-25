import React, {useContext} from 'react'
import CartContext from './CartContext'


const ItemCarrito = ({item, contador}) => {

    const { id, title, pictureUrl, price } = item
    const { removeItem } = useContext(CartContext);

    return (
        <li className="item">
            <div className="imagen"><img src={pictureUrl} alt={title}/></div>
            <div className="descripcion_producto_carrito">
                <h2>{title} - </h2>
                <small>Identificador único: {id}</small>
            </div>
            <span className="separador"></span>
            <div className="cantidad_carrito">
                <p>{contador} x ${price}</p>
                <button onClick={() => removeItem(id)}><span></span><span></span></button>
            </div>
        </li>
    )
}

export default ItemCarrito
