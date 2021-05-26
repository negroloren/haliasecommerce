import React, {useEffect, useState} from 'react'
import ItemList from './ItemList'
import {useParams} from 'react-router-dom'
import {motion} from 'framer-motion'

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

            if(id){
                const filtros = listaProductos.filter(producto => producto.category_url === id)
                console.log(filtros)
                console.log(id)
                setItems(filtros)
            } else {
                setItems(listaProductos)
            }


},[listaProductos,id])

    return (
        <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="list">
            <div className="list_container">
                <h3>{greeting}</h3>
                <ItemList productos={items}/>
            </div>
        </motion.div>
    )
}

export default ItemListContainer
