import React from 'react'
import Item from './Item'

const ItemList = ({productos}) => {


    return (
        <ul>
            { productos.length > 0 ? (  
             productos.map((producto) =>{
                return (
                        <Item key={producto.id} url={producto.url} identificador={producto.id} title={producto.title} price={producto.price} imagen={producto.pictureUrl}/>
                    );
                })
            )
            : (
                <p className="advertencia">Sin productos para esta categoría</p>
            )
            }
        </ul>
    )
}

export default ItemList
