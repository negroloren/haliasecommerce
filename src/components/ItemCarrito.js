import React, {useContext} from 'react'
import CartContext from './CartContext'


const ItemCarrito = ({item, contador}) => {

    const { id, title, pictureUrl, price } = item
    const { removeItem } = useContext(CartContext);

    return (
        <li className="item aparecer_top">
            <div className="imagen"><img src={pictureUrl} alt={title}/></div>
            <div className="descripcion_producto_carrito">
                <h2>{title} - </h2>
                <small>ID: {id}</small>
            </div>
            <span className="separador"></span>
            <div className="cantidad_carrito">
                <div className="cantidad_carrito_detalle">
                    <div className="cantidad_carrito_controles">
                        <button>+</button>
                        <p>{contador}</p>
                        <button>-</button>
                    </div>
                    <p> x ${price}</p>
                </div>
                <button onClick={() => removeItem(id)}><span></span><span></span></button>
            </div>
        </li>
    )
}

export default ItemCarrito
