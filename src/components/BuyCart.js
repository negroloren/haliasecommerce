import React, {useState,useContext} from 'react'
import BuyerForm from './BuyerForm'
import CartContext from './CartContext'

const BuyCart = () => {

    const { cart, total, clearItem } = useContext(CartContext)
    const [vaciar, setVaciar] = useState(false)
    const [formulario, setformulario] = useState("")

    const vaciarCarrito = () => {
        setVaciar(true)
    }
    const cancelar = () => {
        setVaciar(false)
    }

    const finalizarCompra = () => {
        // Acá debo mostrar un formulario 
        //setformulario(true)
    }

    return (
        <div className="intro">
            <h1>Carrito</h1>
            <div className="container_carrito">
                <div className="item_carrito">
                    <div className="barrer_izq">
                        <BuyerForm/>
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
