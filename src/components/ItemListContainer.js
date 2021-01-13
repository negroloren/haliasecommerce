import React, {useEffect, useState} from 'react'
import ItemList from './ItemList'
import {useParams} from 'react-router-dom'
import CategoryFilter from './CategoryFilter'

const ItemListContainer = ({greeting,listaProductos}) => {

/*
    useEffect(()=>{
        
        fetch("https://api.mercadolibre.com/sites/MLA/search?category=MLA1168")
        .then(res=>res.json())
        .then(res=>{
            setItems(res.results)
        })
    })
*/

const {id} = useParams()
const [items,setItems] = useState([])

useEffect (()=>{

    setTimeout(()=>{
            if(id){
                const filtros = listaProductos.filter(producto => producto.category_url === id)
                console.log(filtros)
                console.log(id)
                setItems(filtros)
            } else {
                setItems(listaProductos)
            }
        },2000)

},[listaProductos,id])

    return (
        <div className="list">
            <div className="list_container">
                <h3>{greeting}</h3>
                <ul className="category-filter">
                    <CategoryFilter/>
                </ul>
                <ItemList productos={items}/>
            </div>
        </div>
    )
}

export default ItemListContainer
