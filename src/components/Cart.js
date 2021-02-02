import React, { useContext,useState } from 'react'
import { Link } from 'react-router-dom';
import BuyerForm from './BuyerForm';
import CartContext from './CartContext'
import CartDetail from './CartDetail';
import ItemCarrito from './ItemCarrito'

const Cart = () => {

    const { cart, total, clearItem } = useContext(CartContext)
    const [vaciar, setVaciar] = useState(false)
    const [formulario, setformulario] = useState(false)

    const vaciarCarrito = () => {
        setVaciar(true)
    }
    const cancelar = () => {
        setVaciar(false)
    }


    return (
            <div className="intro">
                <h1>Carrito</h1>
                <div className="container_carrito">
                    <div className="item_carrito">
                        <ul className="barrer_izq">
                            { cart.length > 0 ? (  
                            cart.map((producto) =>{
                                return (
                                        <ItemCarrito key={producto.id} item={producto.item} contador={producto.contador}/>
                                    )
                                })
                            )
                            : (
                                <li className="carrito_vacio">
                                    <p className="advertencia">Tu carrito está vacío.</p>
                                </li>
                            )
                            }
                        </ul>
                        <Link to="/" title="Home">Seguir comprando</Link>
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
                                            <Link to="/finalizar-compra" className="btn_finalizar_compra">Finalizar Compra</Link>
                                            <button className="btn_vaciar_carrito" onClick={() => vaciarCarrito()}>Vaciar Carrito</button>
                                        </div>
                                    </div>
                                    <div className={"popup vaciar " + vaciar}>
                                        <div>
                                                <h3>¿Seguro deseas vaciar tu carrito?</h3>
                                            <div>
                                                <button className="btn_vaciar_carrito" onClick={() => clearItem()}>Vaciar Carrito</button>
                                                <button className="btn_cancelar" onClick={() => cancelar()}>Cancelar</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={"popup vaciar " + formulario}>
                                        <BuyerForm/>
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

export default Cart
