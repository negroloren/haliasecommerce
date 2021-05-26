import React, {useState} from 'react'

const BuyerForm = () => {

    const [nombre, setNombre] = useState("")
    const [email, setEmail] = useState("")
    const [telefono,setTelefono] = useState("")
    const [confirmacion, setConfirmacion] = useState("")

    const obtenerNombre = (e) => {
        setNombre(e.target.value)
        console.log(nombre)
    }

    const obtenerEmail = (e) => {
        console.log(email)
        setEmail(e.target.value)
    }
    const confirmarEmail = (e) => {
        console.log(confirmacion)
        if (e.target.value === email) {
            //setEmail(e.target.value)
            setConfirmacion(e.target.value)
        } else {
            console.log("el correo no coincide")
        }

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
            </fieldset>
            <fieldset>
                <label>Correo</label>
                <input onChange={obtenerEmail}type="email" value={email}/>
                <label>Igrese nuevamente su correo</label>
                <input onChange={confirmarEmail}type="email" value={confirmacion}/>
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
