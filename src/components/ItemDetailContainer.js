import React , {useEffect, useState} from 'react'
import ItemDetail from './ItemDetail'
import {useParams} from 'react-router-dom'
import ItemCount from './ItemCount'

const ItemDetailContainer = ({listaProductos}) => {


    const [item,setItem] = useState([])
    
    const {url} = useParams()

    useEffect(() => {
        
        const getItems = new Promise((resolver,rechazar)=>{
    
            setTimeout(()=>{
                let codigo = 200

                // Acá filtro por el productos seleccionado

                const productoSeleccionado = listaProductos.find(producto => producto.url === url)

                if(codigo < 400){
                    resolver(productoSeleccionado)
                } else{
                    rechazar("Hubo un error en el pedido")
                }
            },2000)
        })
    
        getItems
        .then((res)=>{
            console.log("Salio todo bien")
            setItem(res)
        })
        .catch(()=>{
            console.log("Salio todo mal")
        })
    
    }, [url, listaProductos])
    

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
                    <ItemCount stock={item.stock} initial={item.initial}/>
            </div>
            ) : ( 
                <p className="advertencia">Cargando Detalles</p>
            )}
        </>
    )
}

export default ItemDetailContainer
