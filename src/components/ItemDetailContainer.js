import React , {useEffect, useState} from 'react'
import ItemDetail from './ItemDetail'
import {useParams} from 'react-router-dom'
import ItemCount from './ItemCount'

const ItemDetailContainer = () => {

    const [item,setItem] = useState([])
    
    const parametros = useParams()
    console.log(parametros)
    const url = parametros.url
    console.log(url)

    useEffect(() => {
        
        const getItems = new Promise((resolver,rechazar)=>{
    
            setTimeout(()=>{
                let codigo = 200
                
                // Acá tomo el array de productos que me traigo con el porp productos
                const listaProductos = [  
                    {
                        id: 123123,
                        title: "Panel Solar",
                        price: 1230,
                        pictureUrl: "https://www.halias.com.ar/imagenes/panel-solar-2.jpg",
                        stock: 10,
                        initial: 1,
                        category: "Energía Solar",
                        url:"panel-solar",
                        description: "Los Paneles Solares Policristalinos están hechos de un material similar al silicio, por lo tanto, en vez de pasar por el proceso lento y más caro de la creación de un solo cristal, el silicio fundido se coloca en un molde y se deja enfriar con un cristal granulado. Usando el método de moldeado, el cristal que rodea los granos no es uniforme y se ramifica en muchos cristales más pequeños, de ahí el término 'policristalino'. La superficie tiene un aspecto desordenado con muchas variaciones de color azul. Amerisolar ha desarrollado varios tipos de módulos solares policristalinos.",
                        catalog: "https://www.halias.com.ar/archivos/paneles-solares.pdf",
                
                    },
                    {
                        id: 123467,
                        title: "Termosolar",
                        price: 350,
                        pictureUrl: "https://www.halias.com.ar/imagenes/termosolar.jpg",
                        stock: 5,
                        initial: 1,
                        category: "Energía Solar Térmica",
                        url:"termosolar",
                        descrpition: "El agua ingresa al termotanque solar y empieza a pasar por los tubos de vacío. Estos, gracias a la radiación solar, calientan el agua y dan inicio a un proceso de circulación natural por el cual el agua caliente al ser menos densa sube y el agua fría densa baja. El componente clave del sistema Termosolar son los tubos de vidrio al vacío de alta tecnología que absorben no solamente los rayos solares directos (radiación solar directa) sino tambi?n el calor del medio ambiente, incluso cuando está nublado (radiación solar difusa). Es importante que los tanques de almacenamiento sean de acero inoxidable internamente y cuenten con un revestimiento de poliuretano para asegurarse de que la temperatura del agua no se pierda, especialmente durante la noche.",
                        catalog: "https://www.halias.com.ar/archivos/termosolar.pdf",
                
                    }
                ]
                console.log("Compruebo si me llegan los productos")
                console.log(listaProductos)

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
    
    }, [url])
    



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
                    stock={item.stock}
                    url={item.url}
                    inicial={item.initial} />
                    <ItemCount stock={item.stock} initial={item.initial}/>
            </div>
            ) : ( 
                <h3>Cargando Detalles</h3>
            )}
        </>
    )
}

export default ItemDetailContainer
