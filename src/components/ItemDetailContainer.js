import React , {useEffect, useState} from 'react'
import ItemDetail from './ItemDetail'
import {useParams} from 'react-router-dom'
import {motion} from 'framer-motion'


let transition = {duration: 3, ease: [0.43, 0.13 , 0.23, 0.96]}

const ItemDetailContainer = ({listaProductos}) => {

    const {url} = useParams()
    const [item,setItem] = useState([])
    console.log(url)

    useEffect(() => {
        
            if(url){
                const productoSeleccionado = listaProductos.find(producto => producto.url === url)
                console.log(productoSeleccionado)
                setItem(productoSeleccionado)
            } else {
                setItem(listaProductos)
            }
 
    }, [listaProductos,url])


    return (
        <motion.div         
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={transition}
        >
            { item.url === url ? (
            <div className="detalle_producto" id={item.id}>
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
                    inicial={item.initial} 
                    item={item}/>
            </div>
            ) : ( 
                <p className="advertencia">Cargando Detalles</p>
            )}
        </motion.div>
    )
}

export default ItemDetailContainer
