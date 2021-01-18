import React, {useState,useEffect} from 'react'
import Producto from './Producto'


const productos = [
    {
        id: 1,
        nombre: "termosol"
    },
    {
        id: 2,
        nombre: "panel solar"
    }
];


const EvntProductos = () => {

    const [valor,setValor] = useState("")


    const agregarProducto = () => {
        console.log("Agrego Producto")
    }
    
    const cambiarValor = () => {
        console.log("Escribo Nombre Prodcuto")
    }
    
    

    return (
        <div>
            <input type="text" onChange={cambiarValor}/>
            <button onClick={agregarProducto}>Agregar productos</button>
            <Producto productos={productos}/>
        </div>
    )
}

export default EvntProductos
