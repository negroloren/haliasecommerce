import React from 'react'

const ItemDetail = (props) => {

    const {imagen,identificador,stock,precio,titulo,descripcion,categoria} = props
   
    return (
            <div>
                <img src={imagen} alt={titulo}/>
                <div className="descripcion_producto">
                    <h3>{titulo}</h3>
                    <p>{descripcion}</p>
                    <h4>${precio}</h4>
                    <p>Stock disponible: {stock}</p>
                    <small>Categoría: {categoria} | Identificador único: {identificador}</small>
                </div>
            </div>
    )
}

export default ItemDetail
