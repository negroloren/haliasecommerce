import React , {useEffect,useState} from 'react'
import ItemList from './ItemList'

const ItemListContainer = (props) => {
    
    const {greeting} = props

    const [items,setItems] = useState([])



/*
    useEffect(()=>{
        
        fetch("https://api.mercadolibre.com/sites/MLA/search?category=MLA1168")
        .then(res=>res.json())
        .then(res=>{
            setItems(res.results)
        })
    })
*/


    useEffect(() => {
        
        const promesa = new Promise((resolver,rechazar)=>{
    
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

                if(codigo < 400){
                    resolver(listaProductos)
                } else{
                    rechazar("Hubo un error en el pedido")
                }
            },2000)
        })
    
        promesa
        .then((res)=>{
            console.log("Salio todo bien")
            setItems(res)
        })
        .catch(()=>{
            console.log("Salio todo mal")
        })
    
    }, [])
    

    return (
        <div className="list">
            <h3>Filtros</h3>
            <ul className="list_filter">
                { items.length > 0 ? (
                    items.map((producto) =>{
                        return (
                            <li>{producto.category}</li>
                        );
                    })
                ) : (
                    <p>Cargando categorías</p>
                )}
            </ul>
            <div className="list_container">
                <h3>{greeting}</h3>
                <ItemList productos={items}/>
            </div>
        </div>
    )
}

export default ItemListContainer
