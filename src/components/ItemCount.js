import React , {useState} from 'react';

const ItemCount = (props) => {
    // Limite por stock
    const {stock,initial} = props
    const [contador, setContador] = useState(parseInt(initial));
    
    const aumentarContador = () => {
        setContador(contador + 1)
    }
    const restarContador = () => {
        setContador(contador - 1)
    }
    if(contador > stock){
        setContador(stock)
        alert("El máximo disponible es de: " + stock + " unidades")
    } else if(contador < 0){
        setContador(0)
    }

    const onAdd = () => {
        console.log("Item enviado al carrito: "+ stock +" unidades")
    }

/*
    // el primer parametro siempre es una funcion, la segunda siempres es un array
    useEffect(()=>{
        // este es mi efecto "secundario", que pasa siempre despues del render
        console.log("efecto secundario")
    },[]) // si esta vacío el array, el efecto secundario solo pasa 1 vez
*/
    return (
        <div className="contador_carrito">
            <div className="controles">
                <button onClick={ restarContador }>-</button>
                <div>{contador}</div>
                <button onClick={ aumentarContador }>+</button>
            </div>
            <button className="agregar_carrito" onClick={onAdd}>Agregar al Carrito</button>
        </div>
    )
}

export default ItemCount
