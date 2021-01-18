import React from 'react'

const Producto = ({productos}) => {
    return (
        <>
        { productos.map((producto) => {
                return (
                        <li key={producto.id}>{producto.nombre}</li>
                    )
                })
        }
        </>
    )
}

export default Producto
