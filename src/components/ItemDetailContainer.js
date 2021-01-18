import React , {useEffect, useState} from 'react'
import ItemDetail from './ItemDetail'
import {useParams} from 'react-router-dom'

const ItemDetailContainer = ({listaProductos}) => {

    const {url} = useParams()
    const [item,setItem] = useState([])
    console.log(url)

    useEffect(() => {
        
            if(url){
                const productoSeleccionado = listaProductos.find(producto => producto.url === url)
                console.log(productoSeleccionado)
                console.log(url)
                setItem(productoSeleccionado)
            } else {
                setItem(listaProductos)
            }
 
    }, [listaProductos,url])


    return (
        <>
            { item.url === url ? (
            <div className="detalle_producto" id={item.id}>
                <h3>Detalle del producto</h3>
                <ItemDetail 
                    identificador={item.id} 
                    titulo={item.title} 
                    precio={item.price} 
                    imagen={item.pictureUrl} 
                    categoria={item.category} 
                    descripcion={item.description}
                    catalogo={item.catalog}
                    stock={item.stock}
                    url={item.url}
                    inicial={item.initial} />
            </div>
            ) : ( 
                <p className="advertencia">Cargando Detalles</p>
            )}
        </>
    )
}

export default ItemDetailContainer
