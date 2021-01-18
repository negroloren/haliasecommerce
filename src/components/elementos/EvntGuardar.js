import React, {useState} from 'react'
import EvntSuboValor from './EvntSuboValor';

const EvntGuardar = () => {
    
    const [valor,setValor] = useState("")
    const [subir,setSubir] = useState("")
    const [textoCarrito,setTextoCarrito] = useState("Subir valor")


    const editoValor = valorNuevo => {
        setValor(valorNuevo.target.value)
        //console.log(valorNuevo.target.value)
    }

    const tomoValor = e => {
        console.log("Subo el valor del input:" + valor)
        setSubir(valor)
        setTextoCarrito("Carrito Bloqueado")
        e.stopPropagation()
        e.preventDefault()
    }

    return (
        <div>
            <h4>Subo el valor de un input hacia un componente superior</h4>
            <p>Este es el componente superior</p>
            <p className="muestroValorHijo">{subir}</p>
            <p>Este es el componente inferior</p>
            <EvntSuboValor editoValor={editoValor} tomoValor={tomoValor} textoCarrito={textoCarrito} />
        </div>
    )
}

export default EvntGuardar
