import React from 'react'

const ItemDetail = (props) => {

    const {imagen,identificador,stock,precio,titulo,descripcion,categoria,catalogo,url} = props
   
    return (
            <div>
                <img src={imagen} alt={titulo}/>
                <div className="descripcion_producto">
                    <h3>{titulo}</h3>
                    <p>{descripcion}</p>
                    <h4>${precio}</h4>
                    <p>Stock disponible: {stock}</p>
                    <div className="detalles-links">
                        <a href={catalogo} title={"catalogo-" + url} target="_blank" rel="noreferrer">Catálogo</a>
                        <span className="bockmark"></span>
                    </div>
                    <small>Categoría: {categoria} | Identificador único: {identificador}</small>
                </div>
            </div>
    )
}

export default ItemDetail
