import React , {useState} from 'react';
import {Link} from 'react-router-dom'

const ItemCount = ({stock,initial, id, mostrarAgregar}) => {
    
    const [contador, setContador] = useState(initial) // Controla el contador
    const [textoCarrito,setTextoCarrito] = useState("Agregar al Carrito") // Cambia nombre del botón a "Actualizando carrito"
    const [bloqueoControles,setBloqueoControles] = useState("controles") // Bloque los controles del contador y los hce desaparecer
    const [funCarrito,setFunCarrito] = useState("agregar_carrito") // Cambia el botón de Agregar al Carrito por Finalizar compra
    
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

    const enviarProducto = () => {
        console.log("El producto a comprar es ID:"+ id)
    }

    const onAdd = () => {
        // alert("Item enviado al carrito: ID="+ id + " por " + contador +" unidades")
        setTimeout(()=>{
            console.log("Agregando productos al carrito")
            setTextoCarrito("Agregando productos...")
            setTimeout(()=>{
                // Acá debo eliminar el boton de agregar al carrito
                mostrarAgregar("Item enviado al carrito: ID="+ id + " por " + contador +" unidades")
                console.log("Carrito actualizado")
                //setTextoCarrito("Terminar mi compra")
                console.log("Ahora borramos el boton de Agregar al Carrito")
                setBloqueoControles("ocultar")
                setFunCarrito("terminar_compra")
                console.log("Ahora muestro el Botón de Finalizar Compra")
                console.log(mostrarAgregar)
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
            <div className="controles_carrito">
                {/*<button className="agregar_carrito" onClick={onAdd}>{textoCarrito}</button>*/}


                { funCarrito === "agregar_carrito" ? (
                        <button className={funCarrito} onClick={onAdd}>{textoCarrito}</button> 
                    ) : (
                        <Link to="/carrito"><button className={funCarrito} onClick={enviarProducto}>Finalizar Compra</button></Link>
                    )
                }


            </div>
        </div>
    )
}

export default ItemCount
