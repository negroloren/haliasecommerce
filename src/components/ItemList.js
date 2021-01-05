import React , {useEffect,useState} from 'react'
import Item from './Item'

const ItemList = () => {

    /*    
    const productos = [  
        {
            id: 123123,
            title: "Panel Solar",
            price: 1230,
            pictureUrl: "https://www.halias.com.ar/imagenes/panel-solar-2.jpg",
        },
        {
            id: 123467,
            title: "Termosolar",
            price: 350,
            pictureUrl: "https://www.halias.com.ar/imagenes/termosolar.jpg",
        }
    ]
    */
    //console.log(productos)

    // Esto no se si esta bien
    /*
    const producto = productos.map((item) =>
        <Item key={item.toString()} identificador={item.id} title={item.title} price={item.price} imagen={item.pictureUrl}/>
    );
    */
    
    const [productos, setProductos] = useState([]);
    
    useEffect(()=>{
        // el primer parametro es la funcion, y la segunda es el array, que "controla" la cantidad de veces que se ejecutara el efecto. En este caso [] esta vaío, entonces solo pasa 1 sol vez, siempre despues de renderizar.   
        //console.log("efecto de una sola vez")
        const listadoDeProductos = new Promise((resolver,rechazar)=>{        
            //Simulacro de pedido (Mock de pedido)
            setTimeout(()=>{
                //console.log("Termino el pedido")
                let codigo = 200
                const listadoProductos = [  
                    {
                        id: 123123,
                        title: "Panel Solar",
                        price: 1230,
                        pictureUrl: "https://www.halias.com.ar/imagenes/panel-solar-2.jpg",
                    },
                    {
                        id: 123467,
                        title: "Termosolar",
                        price: 350,
                        pictureUrl: "https://www.halias.com.ar/imagenes/termosolar.jpg",
                    }
                ] 
                if(codigo < 400){
                    resolver(listadoProductos)
                } else{
                    rechazar("Hubo un error en el pedido")
                }
            },2000)
        })

        listadoDeProductos
        .then((listadoProductos)=>{
            console.log("Salio todo bien")
            console.log(listadoProductos)
            setProductos(listadoProductos)
        })
        .catch(()=>{
            console.log("Salio todo mal")
        })

    },[])



    return (
        <ul>
            {/* {producto} */}

            { productos.length > 0 ? (
                productos.map((producto) =>{
                    return (
                        <Item identificador={producto.id} title={producto.title} price={producto.price} imagen={producto.pictureUrl}/>
                    );
                })
            ) : (
                <p>No hay productos disponibles</p>
            )}
        </ul>
    )
}

export default ItemList
