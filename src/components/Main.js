import React from 'react';
import ItemListContainer from './ItemListContainer';
import {Route, Switch} from 'react-router-dom'

import Home from './Home'
import Ofertas from './Ofertas'
import Categorias from './Categorias'
import MiCuenta from './MiCuenta'
import ItemDetailContainer from './ItemDetailContainer';


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
            <Switch>
                <Route exact path="/">
                    <Home/>
                    <ItemListContainer greeting="Listado de Productos" />
                </Route>
                <Route path="/productos/:url">
                    <ItemDetailContainer />
                </Route>
                <Route path="/categorias">
                    <Categorias/>
                </Route>
                <Route path="/ofertas">
                    <Ofertas/>
                </Route>
                <Route path="/mi-cuenta">
                    <MiCuenta/>
                </Route>
            </Switch>
        </main>
    )
}

export default Main
