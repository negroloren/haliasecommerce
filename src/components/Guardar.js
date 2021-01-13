import React, {useState} from 'react'
import Input from './Input';

const Guardar = () => {
    
    const [valor,setValor] = useState("")


    const cambiarValor = valorNuevo => {
        setValor(valorNuevo)
    }
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
    const hacerClick = e => {
        console.log("hice click")
    }
    const confirmarClick = (e) => {
        e.stopPropagation();
        e.preventDefault();
        console.log("estas seguro?")
        alert("¿Quieres salir?")
    }
    */


    return (
        <div>
            {/*<a href="/" onClick={confirmarClick}>click con confirmacion</a>
            <input type="text" onChange={cambiarValor} onKeyDown={apretarTecla} onKeyUp={soltarTecla} value={valor}/>
    <button onClick={hacerClick}>Hacer click</button>*/}
            <Input nuevoValor={cambiarValor}/>
            <p>{valor}</p>
        </div>
    )
}

export default Guardar
