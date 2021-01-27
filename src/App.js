import React, {useEffect, useState} from 'react'
import Header from "./components/Header"
import Footer from "./components/Footer"
import Main from './components/Main'
import {BrowserRouter} from 'react-router-dom'
import CartState from './components/CartState'
import {firestore} from './firebaseConfig'

/*
const listaProductos = [  
    {
        id: 123123,
        title: "Panel Solar",
        price: 1230,
        pictureUrl: "https://www.halias.com.ar/imagenes/panel-solar-2.jpg",
        stock: 10,
        initial: 1,
        category: "Energía Solar",
        category_url: "energia_solar",
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
        category_url: "energia_solar_termica",
        url:"termosolar",
        description: "El agua ingresa al termotanque solar y empieza a pasar por los tubos de vacío. Estos, gracias a la radiación solar, calientan el agua y dan inicio a un proceso de circulación natural por el cual el agua caliente al ser menos densa sube y el agua fría densa baja. El componente clave del sistema Termosolar son los tubos de vidrio al vacío de alta tecnología que absorben no solamente los rayos solares directos (radiación solar directa) sino tambi?n el calor del medio ambiente, incluso cuando está nublado (radiación solar difusa). Es importante que los tanques de almacenamiento sean de acero inoxidable internamente y cuenten con un revestimiento de poliuretano para asegurarse de que la temperatura del agua no se pierda, especialmente durante la noche.",
        catalog: "https://www.halias.com.ar/archivos/termosolar.pdf",

    },
    {
        id: 789465,
        title: "Caldera Main 5",
        price: 1350,
        pictureUrl: "https://www.halias.com.ar/imagenes/caldera-main-5.jpg",
        stock: 15,
        initial: 1,
        category: "Calefacción",
        category_url: "calefaccion",
        url:"caldera-main-5",
        description: "La caldera mural a gas Main 5 es un equipo eficiente pensado para viviendas de m2 reducidos, donde ahorrar espacio es tan importante como ahorrar energía. Cubre a la perfección todas las necesidades de calefacción y agua caliente, requiriendo un mínimo espacio de instalación. Es una caldera ideal para departamentos, fácil de usar y de instalar junto con diferentes sistemas de calefacción por agua, como radiadores o piso radiante.",
        catalog: "https://www.halias.com.ar/archivos/caldera-main-5.pdf",

    },
    {
        id: 451236,
        title: "Radiador Pluss",
        price: 30,
        pictureUrl: "https://www.halias.com.ar/imagenes/radiador-pluss.jpg",
        stock: 60,
        initial: 1,
        category: "Calefacción",
        category_url: "calefaccion",
        url:"radiador-pluss",
        description: "Diseño y calidad europea que aseguran unóptimo rendimiento y ahorro de energía.Fabricados en aluminio inyectado en una sola pieza, con tratamiento anticorrosivo que brinda mayor durabilidad.",
        catalog: "https://www.halias.com.ar/archivos/caldera-main-5.pdf",
    }
]
*/

const App = () => {

    // Hago el llamado a Firebase
    const [productos,setProductos] = useState([])
    
    useEffect(() => {
        console.log(firestore)    
        const db = firestore
        const collection = db.collection("productos")
        //const query = collection.get()
        collection.get().then(querySnapshot=>{
            const items = (querySnapshot.docs.map(doc => ({...doc.data(), id: doc.id})));
        setProductos(items)
        console.log("Firestore conectado correctamente")
        })
        .catch((err)=>{
            console.log("Fallo el llamado a Firebase" + err)
        })

    }, [])
    

    return(
        <BrowserRouter>
            <CartState>
                <Header/>
                <Main productos={productos}/>
                <Footer/>
            </CartState>
        </BrowserRouter>
    )
}

export default App