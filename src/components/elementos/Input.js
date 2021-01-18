import React from 'react'

const Input = () => {

    const cambioValor = a => {
        console.log("cambio el valor")
        //setValor(a.target.value);
        console.log(a.target.value)
    }
     
    // Acá quiero validar el imput para que solo se ingresen numeros

    const comprobarNumero = b => {
        console.log(b.key,b.keyCode)
        
        if (b.keyCode >= 48 && b.keyCode <= 57) {

        } else if (b.keyCode >= 96 && b.keyCode <= 105) {

        } else { 
            b.preventDefault()
            alert("Solo números")
        }
        

    }

    return (
        <div>
            <input type="text" onChange={cambioValor} />
            <input type="text" onKeyDown={comprobarNumero} />
        </div>
    )
}

export default Input
