import React , {useState,useEffect}from 'react';
import ItemListContainer from './ItemListContainer';
import {Route, Switch} from 'react-router-dom'
import Home from './Home'
import Ofertas from './Ofertas'
import MiCuenta from './MiCuenta'
import ItemDetailContainer from './ItemDetailContainer';
import Carrito from './Carrito';
import Elementos from './Elementos'

const Main = ({productos}) => {

const [items,setItems] = useState([])

useEffect(() => {
    
    const promesa = new Promise((resolver,rechazar)=>{
        setTimeout(()=>{
            let codigo = 200
            console.log("Compruebo si me llegan los productos")
            
            if(codigo < 400){
                resolver(productos)
            } else {
                rechazar("Hubo un error en el pedido")
            }
        },2000)
    })
    promesa
    .then((res)=>{
        console.log("Salio todo bien")
        setItems(res)
    })
    .catch(()=>{
        console.log("Salio todo mal")
    })

}, [productos])

    return (
        <main>
            <Switch>
                <Route exact path="/">
                    <Home/>
                    <ItemListContainer greeting="Filtra tus productos preferidos" listaProductos={items}/>
                </Route>
                <Route path="/productos/:url">
                    <ItemDetailContainer listaProductos={items}/>
                </Route>
                <Route exact path="/categorias/:id">
                    <ItemListContainer greeting="Filtra tus productos preferidos" listaProductos={items}/>
                </Route>
                <Route path="/elementos">
                    <Elementos/>
                </Route>
                <Route path="/ofertas">
                    <Ofertas/>
                </Route>
                <Route path="/carrito">
                    <Carrito/>
                </Route>
                <Route path="/mi-cuenta">
                    <MiCuenta/>
                </Route>
            </Switch>
        </main>
    )
}

export default Main
