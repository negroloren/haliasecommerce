import React from 'react'

const Input = ({cambiarValor}) => {

    /*
    const cambiarValor = e => {
        console.log("cambio el valor")
        setValor(e.target.value);
        console.log(e.target.value)
    };
     
    const apretarTecla = e => {
        console.log(e.key,e.keyCode);
        if (e.keyCode >= 65 && e.keyCode <= 90) {

        } else { 
         e.preventDefault();
        }

    };
    
    const soltarTecla = e => {
        console.log("solte la tecla")
    };
*/

    const otroValor = e => {
        otroValor(e.target.value)
    };


    return (
        <div>
            <input type="text" onChange={otroValor} />
        </div>
    )
}

export default Input
