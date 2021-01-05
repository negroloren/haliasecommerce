import React from 'react'
import ItemCount from './ItemCount'
import ItemList from './ItemList'

const ItemListContainer = (props) => {
    
    console.log(props)
    const {greeting} = props
    return (
        <div className="list_container">
            <h3>{greeting}</h3>
            <ItemList/>
            <ItemCount stock="7" initial="1"/>
        </div>
    )
}

export default ItemListContainer
