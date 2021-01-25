import React, {useState,useEffect} from 'react'
import CartContext from './CartContext'


const CartState = ({children}) => {

   const [cart,setCart] = useState([])
   const [total, setTotal] = useState(0)
   const [actualizar,setActualizar] = useState(0)
   
   const addToCart = ({item, contador, precio, id}) => {
       
       let productoExistente = cart.find(producto => producto.item.id == id)
       
       if (productoExistente) {
           console.log("Este producto ya existe")
           console.log(productoExistente.contador)
           console.log("agregarndo " + contador + " unidad/es al producto ID: " + id + " ya existente")

        setCart([
            cart.find(producto => producto.item.id !== id),
                {
                    item: item,
                    contador: productoExistente.contador + contador,
                    precio: precio
                }
        ])

        } else {
            setCart([
                ...cart,
                {
                    item: item,
                    contador: contador,
                    precio: precio
                }
            ])
        }
    }

    const clearItem = () => {
        setCart([])
    }
    const removeItem = id => {
        const nuevoProducto = cart.filter(producto => producto.item.id !== id)
        setCart(nuevoProducto)
    }


    useEffect(() => {

        /*
        console.log("Efecto actualizar: " + actualizar)
        let cantidadVieja = cart.map( producto => producto.contador)
        let sumarCantidades = parseInt(actualizar) + parseInt(cantidadVieja)
        console.log("sumo las cantidades: " + sumarCantidades)
        */
       
        let totalActual = 0
        const totales = cart.map( producto => producto.item.price * producto.contador )
        totales.map( totalPagar => totalActual += totalPagar)
        setTotal(totalActual)


    }, [cart])
    

    return (
        <CartContext.Provider value={{cart,total,addToCart,clearItem,removeItem, actualizar, setActualizar}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartState
