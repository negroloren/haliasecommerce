import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import CartContext from './CartContext'
import ItemCarrito from './ItemCarrito'

const Cart = () => {

    const { cart, total, clearItem } = useContext(CartContext);


    return (
            <div className="intro">
                <h1>Carrito</h1>
                <div className="container_carrito">
                    <div className="item_carrito">
                        <ul>
                            { cart.length > 0 ? (  
                            cart.map((producto) =>{
                                return (
                                        <ItemCarrito key={producto.i} item={producto.item} contador={producto.contador}/>
                                    )
                                })
                            )
                            : (
                                <li className="carrito_vacio">
                                    <p className="advertencia">Tu carrito está vacío.</p>
                                    <Link to="/" title="Home">Volver a comprar</Link>
                                </li>
                            )
                            }
                        </ul>
                        <Link to="/" title="Home">Seguir comprando</Link>
                    </div>
                        { cart.length > 0 ? (  
                            <div className="detalles_carrito">
                                <ul className="item_carrito_total">
                                        {cart.map((producto) =>{
                                            return (
                                                <li>
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
                                        <button className="btn_finalizar_compra">Finalizar Compra</button>
                                        <button className="btn_vaciar_carrito" onClick={() => clearItem()}>Vaciar Carrito</button>
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
