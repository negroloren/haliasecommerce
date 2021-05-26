import React , {useState,useEffect}from 'react';
import ItemListContainer from './ItemListContainer';
import {Route, Switch} from 'react-router-dom'
import Intro from './Intro'
import Ofertas from './Ofertas'
import MiCuenta from './MiCuenta'
import ItemDetailContainer from './ItemDetailContainer';
import Elementos from './Elementos'
import Contacto from './Contacto';
import Blog from './Blog';
import Cart from './Cart';
import BuyCart from './BuyCart';

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
                        <Intro/>
                        <ItemListContainer greeting="Filtra tus productos preferidos" listaProductos={items}/>
                    </Route>
                    <Route path="/productos/:url">
                        <ItemDetailContainer listaProductos={items}/>
                    </Route>
                    <Route exact path="/categorias/:id">
                        <Intro/>
                        <ItemListContainer greeting="Filtra tus productos preferidos" listaProductos={items}/>
                    </Route>
                    <Route path="/elementos">
                        <Elementos/>
                    </Route>
                    <Route path="/ofertas">
                        <Ofertas/>
                    </Route>
                    <Route path="/carrito">
                        <Cart/>
                    </Route>
                    <Route path="/mi-cuenta">
                        <MiCuenta/>
                    </Route>
                    <Route path="/contacto">
                        <Contacto/>
                    </Route>
                    <Route path="/blog">
                        <Blog/>
                    </Route>
                    <Route path="/finalizar-compra">
                        <BuyCart/>
                    </Route>
                </Switch>
        </main>
    )
}

export default Main
