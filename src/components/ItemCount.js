import React , {useState} from 'react';
import {Link} from 'react-router-dom'
import CartContext from './CartContext'

const ItemCount = ({item,precio,stock,initial,id,mostrarAgregar,addToCart}) => {
    
    const [contador, setContador] = useState(initial) // Controla el contador
    const [textoCarrito,setTextoCarrito] = useState("Agregar al Carrito") // Cambia nombre del botón a "Actualizando carrito"
    const [bloqueoControles,setBloqueoControles] = useState("controles") // Bloque los controles del contador y los hce desaparecer
    const [funCarrito,setFunCarrito] = useState("") // Cambia el botón de Agregar al Carrito por Finalizar compra

    const aumentarContador = () => {
        setContador(contador + 1)
    }
    const restarContador = () => {
        setContador(contador - 1)
    }
    if(contador > stock){
        setContador(stock)
        alert("El máximo disponible es de: " + stock + " unidades")
    } else if(contador < 1){
        setContador(initial)
    }
    const onAdd = () => {
        setTimeout(()=>{
            console.log("Agregando productos al carrito")
            setTextoCarrito("Agregando productos...")
            setTimeout(()=>{
                // Acá debo eliminar el boton de agregar al carrito
                mostrarAgregar("Producto enviado al carrito por " + contador +" unidades")
                //setTextoCarrito("Terminar mi compra")
                setBloqueoControles("ocultar")
                setFunCarrito("terminar_compra")
            },1500)
        },300)
    }

    return (
        <div className="contador_carrito">
            <div className={bloqueoControles}>
                <button onClick={ restarContador }>-</button>
                <div>{contador}</div>
                <button onClick={ aumentarContador }>+</button>
            </div>
            <div className={bloqueoControles}>
                <button id="agregar" className={funCarrito} onClick={onAdd}>{textoCarrito}</button> 
            </div>
            <Link to="/carrito"><button id="finalizar" className={funCarrito}
                            onClick={() => { 
                                    addToCart({item, precio, contador, id})
                                }
                            }>Finalizar Compra</button></Link>
        </div>
    )
}

export default ItemCount
