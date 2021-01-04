import React from 'react'
import ItemCount from './ItemCount'

const ItemListContainer = (props) => {
    
    console.log(props)
    const {greeting} = props
    return (
        <div className="list_container">
            <h3>{greeting}</h3>
            <ItemCount stock="7" initial="1"/>
        </div>
    )
}

export default ItemListContainer
