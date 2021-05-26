import React, {useState,useContext} from 'react'
import ItemCount from './ItemCount'
import bookmark from '../imagenes/bookmark.svg'
import CartContext from './CartContext'

import { motion } from "framer-motion"

const ItemDetail = ({item,identificador,titulo,precio,imagen,categoria,descripcion,catalogo,stock,url,inicial}) => {
    
    const [mostrar,setMostrar] = useState("")   
	const { addToCart } = useContext(CartContext);

    return (
            <div className="item-detalle">
                <div className="slider-img-producto"></div>
                <div className="container-img-producto">
                    <img src={imagen} alt={titulo}/>
                </div>
                <div className="descripcion_producto">
                    <h3>{titulo}</h3>
                    <p>{descripcion}</p>
                    <h4>${precio}</h4>
                    <p>Stock disponible: {stock}</p>
                    <div className="detalles-links">
                        <a href={catalogo} title={"catalogo-" + url} target="_blank" rel="noreferrer">Catálogo</a>
                        <span className="bockmark"><img src={bookmark} alt="bookmark" width="20px"/></span>
                    </div>
                    <small>Categoría: {categoria} | ID: {identificador}</small>
                    <small className="advertencia_carrito">{mostrar}</small>
                    <ItemCount precio={precio} item={item} stock={stock} initial={inicial} id={identificador} mostrarAgregar={setMostrar} addToCart={addToCart} />
                </div>
            </div>

    )
}

export default ItemDetail
