import React from 'react'

const ItemListContainer = (props) => {
    
    console.log(props)
    const {greeting} = props
    return (
        <div className="list_container">
            <h3>{greeting}</h3>
        </div>
    )
}

export default ItemListContainer
