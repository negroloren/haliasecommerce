import React, {useState,useContext} from 'react'
import CartContext from './CartContext'
import {firestore} from '../firebaseConfig'
import firebase from 'firebase/app';
import {useHistory} from 'react-router-dom'

const BuyCart = () => {

    const { cart, total, clearItem } = useContext(CartContext)
    const [vaciar, setVaciar] = useState(false)
    const [formulario, setformulario] = useState("")
    
    const [nombre, setNombre] = useState("")
    const [email, setEmail] = useState("")
    const [telefono,setTelefono] = useState("")
    const [compra, setCompra] = useState("")

    const vaciarCarrito = () => {
        setVaciar(true)
    }
    const cancelar = () => {
        setVaciar(false)
    }

    const finalizarCompra = () => {
        // Acá debo mostrar un formulario 
        setformulario(true)
    }


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
            //history.push("/")
            history.push("/")
        })
        .catch((error) => console.log(error))

        // Redirecciono al Home y limpio el carrito

        


    }




    return (
        <div className="intro">
            <h1>Carrito</h1>
            <div className="container_carrito">
                <div className="item_carrito">
                    <div className="barrer_izq">
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
                    </div>
                </div>
                { cart.length > 0 ? (  
                    <div className="contenedor_detalles_carrito">
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
                                        <button className="btn_cancelar" onClick={() => cancelar()}>Cancelar</button>
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
