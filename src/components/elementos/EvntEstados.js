import React, {useState} from 'react'
import EvntSalir from './EvntSalir'

const EvntEstados = () => {

    const [valor,setValor] = useState(true)

    const cambiarEstado = () => {
        setValor(!valor)
    }

    return (
        <div>
            <button onClick={cambiarEstado}>Cambiar</button>
            {valor ? <EvntSalir/> : null }
            <p className={valor? "verde" : "rojo"}>Hola</p>
        </div>
    )
}

export default EvntEstados
