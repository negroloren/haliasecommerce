import React from 'react'
import EvntClick from './elementos/EvntClick'
import EvntGuardar from './elementos/EvntGuardar'
import EvntSalir from './elementos/EvntSalir'
import EvntEstados from './elementos/EvntEstados'
import Input from './elementos/Input'
import EvntProductos from './elementos/EvntProductos'

const Elementos = () => {
    return (
        <div className="intro">
            <h2>Componentes vistos en clase</h2>
            <p>Aquí voy recopilando algunos componentes vistos en clase, para ir probando los diferentes ejersicios.</p>
            <div className="eventos">
                <h3>En el primer input obtengo el valor de tipeo del cliente en in imput y lo muestro en consola. En el segundo valido el input con valores únicamente numéricos.</h3>
                <Input/>
            </div>
            <div className="eventos">
                <h3>Obtengo un mensaje en la consola al hacer click.</h3>
                <EvntClick/>
            </div>
            <div className="eventos">
                <h3>Guardo un valor de input en un variable de estado, para subirla por medio de la funciona setState.</h3>
                <EvntGuardar/>
            </div>
            <div className="eventos">
                <h3>Muestro un mensaje al intentar "SALIR", evitando la funcion por defecto de un elemento.</h3>
                <EvntSalir/>
            </div>
            <div className="eventos">
                <h3>Cambio de estados</h3>
                <EvntEstados/>
            </div>
            <div className="eventos">
                <h3>Cambio de estados</h3>
                <EvntProductos/>
            </div>
        </div>
    )
}

export default Elementos
