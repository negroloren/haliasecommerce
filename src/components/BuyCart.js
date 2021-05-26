import React, {useState,useContext} from 'react'
import CartContext from './CartContext'
import {firestore} from '../firebaseConfig'
import firebase from 'firebase/app';
import {useHistory} from 'react-router-dom'

const BuyCart = () => {

    const { cart, total, clearItem, setCart } = useContext(CartContext)
    const [vaciar, setVaciar] = useState(false)
    const [formulario, setFormulario] = useState("mostrar")
    const [nombre, setNombre] = useState("")
    const [apellido, setApellido] = useState("")
    const [email, setEmail] = useState("")
    const [confirmacion, setConfirmacion] = useState("")
    const [telefono,setTelefono] = useState("")
    const [bloqueo,setBloqueo] = useState(true)
    const [compra, setCompra] = useState("")
    const [alerta, setAlerta] = useState("")

    const vaciarCarrito = () => {
        setVaciar(true)
    }
    const cancelar = () => {
        setVaciar(false)
    }

    const obtenerNombre = (e) => {
        setNombre(e.target.value)
        console.log(nombre)
    }
    const obtenerApellido = (e) => {
        setApellido(e.target.value)
        console.log(apellido)
    }

    const obtenerEmail = (e) => {
        setEmail(e.target.value)
        console.log(email)
    }
    const confirmarEmail = (e) => {
        console.log(confirmacion)
        setConfirmacion(e.target.value)
            if (e.target.value === email) {
                console.log("el correo coincide")
                setBloqueo(false)
                setAlerta("Perfecto!!!")
            } else {
                console.log("el correo no coincide")
                setBloqueo(true)
                setAlerta("Ups... Tu correo no coincide")
            }
    }
    
    
    const obtenerTelefono = (e) => {
        setTelefono(e.target.value)
        console.log(telefono)
    }

    let history = useHistory()

    const enviarOrden = (e) => {
        e.stopPropagation()
        e.preventDefault()
        console.log("click " + nombre + email + telefono)
    
        // Envío la orden a la collección de firebase
        
        const db = firestore
        const orders = db.collection('ordenes')

        const order = {
            buyer: { name: nombre, email: email, phone: telefono},
            items: cart,
            date: firebase.firestore.Timestamp.fromDate(new Date()),
            total: total,
        }
        orders.add(order)
        .then(({ id }) => {
            setCompra("El id de tu compra es: " + id)
            console.log("Orden enviada con éxito")
            setNombre("")
            setTelefono("")
            setEmail("")
            setConfirmacion("")
            setFormulario("ocultar")
            
            setCart([])
            //history.push("/")
        })
        .catch((error) => console.log(error))

        // Redirecciono al Home y limpio el carrito

        
        
    }
    
    



    return (
        <div className="intro">
            <h1>Carrito</h1>
            <div className="container_carrito">
                <div className={"item_carrito " + formulario}>
                    <div className="barrer_izq">
                    <form className={formulario}>
                        <fieldset className="fieldset_2">
                            <div>
                                <label>Nombre</label>
                                <input onChange={obtenerNombre} type="text" value={nombre} required/>
                            </div>
                            <div>
                                <label>Apellido</label>
                                <input onChange={obtenerApellido} type="text" value={apellido} required/>
                            </div>
                        </fieldset>
                        <fieldset className="fieldset_2">
                            <div>
                                <label>Correo</label>
                                <input onChange={obtenerEmail}type="email" value={email} required/>
                            </div>
                            <div>
                                <label>Confirme su correo</label>
                                <input onChange={confirmarEmail}type="email" value={confirmacion} required/>
                            </div>
                            <small>{alerta}</small>
                        </fieldset>
                        <fieldset className="fieldset_1">
                            <div>
                                <label>Teléfono</label>
                                <input onChange={obtenerTelefono}type="tel" value={telefono}  required/>
                            </div>
                        </fieldset>
                        <fieldset className="fieldset_1">
                            <div>
                                <label>¿Algún otro comentario?</label>
                                <textarea></textarea>
                            </div>
                            <div>
                                <label>¿Quieres suscribirte a nuestro Newslleter?</label>
                                <div className="input_suscripcion">
                                    <input className="toggle-state" type="checkbox" name="check" value="check" checked/>
                                    <label>Sí, quiero suscribirme.</label>
                                </div>
                            </div>
                        </fieldset>
                        <div>
                            <input type="submit" value="Enviar pedido" onClick={enviarOrden} disabled={bloqueo}/>
                        </div>  
                    </form>
                    <div className={!formulario}>
                        <p>{compra}</p>
                    </div>
                    </div>
                </div>
                { cart.length > 0 ? (  
                    <div className={"contenedor_detalles_carrito " + formulario}>
                        <div className="detalles_carrito barrer_izq">
                            <ul className="item_carrito_total">
                                    {cart.map((producto) =>{
                                        return (
                                            <li key={producto.id} className="aparecer_top">
                                                <p>{producto.item.title}</p>
                                                <span className="separador"></span>
                                                <p>x {producto.contador}</p>
                                            </li>
                                            )
                                        })
                                    }
                            </ul>
                            <div className="finalizar_carrito">
                                <span>Total a Pagar: ${total}</span>
                                <div className="botones_carrito">
                                    <button className="btn_vaciar_carrito" onClick={() => vaciarCarrito()}>Cancelar Compra</button>
                                </div>
                            </div>
                            <div className={"popup vaciar " + vaciar}>
                                <div>
                                        <h3>¿Seguro deseas cancelar esta compra?</h3>
                                    <div>
                                        <button className="btn_vaciar_carrito" onClick={() => clearItem()}>Cancelar Compra</button>
                                        <button className="btn_cancelar" onClick={() => cancelar()}>Seguir comprando</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    ) : (
                        <>
                        </>
                        )
                    }
            </div>
        </div>
    )
}

export default BuyCart
