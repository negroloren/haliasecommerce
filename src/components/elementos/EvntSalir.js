import React from 'react'
import {Link} from 'react-router-dom'
const EvntSalir = () => {

    const confirmarClick = (e) => {
        e.stopPropagation() // Este código, previene el efecto por defecto de la función: en este caso de redirección del link
        e.preventDefault()
        console.log("Intentando salir")
        alert("¿Quieres salir?")
    }

    return (
        <div>
            <Link to="/" onClick={confirmarClick}>Salir</Link>
        </div>
    )
}

export default EvntSalir
