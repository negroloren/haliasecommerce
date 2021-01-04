import React from 'react';
import ItemListContainer from './ItemListContainer';

const Main = () => {
/*
    const [contador, setContador] = useState(0);
    const aumentarContador = () => {
        setContador(contador + 1)
    }
    const restarContador = () => {
        setContador(contador - 1)
    }

    // el primer parametro siempre es una funcion, la segunda siempres es un array
    useEffect(()=>{
        // este es mi efecto "secundario", que pasa siempre despues del render
        console.log("efecto secundario")
    },[]) // si esta vacío el array, el efecto secundario solo pasa 1 vez
*/

    return (
        <main>
            <ItemListContainer greeting="Listado de Productos"/>
        </main>
    )
}

export default Main
