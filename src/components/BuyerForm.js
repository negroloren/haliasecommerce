import React, {useState} from 'react'

const BuyerForm = () => {

    const [nombre, setNombre] = useState("")
    const [email, setEmail] = useState("")
    const [telefono,setTelefono] = useState("")

    const obtenerNombre = (e) => {
        setNombre(e.target.value)
        console.log(nombre)
    }

    const obtenerEmail = (e) => {
        setEmail(e.target.value)
        console.log(email)
    }
    const obtenerTelefono = (e) => {
        setTelefono(e.target.value)
        console.log(telefono)
    }

    const enviarOrden = (e) => {
        e.stopPropagation()
        e.preventDefault()
        console.log("click " + nombre + email + telefono)
    }



    return (
        <form>
            <fieldset>
                <label>Nombre</label>
                <input onChange={obtenerNombre} type="text" value={nombre}/>
                <label>Correo</label>
                <input onChange={obtenerEmail}type="email" value={email}/>
            </fieldset>
            <fieldset>
                <label>Teléfono</label>
                <input onChange={obtenerTelefono}type="tel" value={telefono}/>
            </fieldset>
            <div>
                <input type="submit" value="Enviar pedido" onClick={enviarOrden}/>
            </div>  
        </form>
    )
}

export default BuyerForm
