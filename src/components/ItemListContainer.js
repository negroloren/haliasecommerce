import React from 'react'

const ItemListContainer = (props) => {
    
    console.log(props)
    const {greeting} = props
    return (
        <div className="list_container">
            <p>{greeting}</p>
        </div>
    )
}

export default ItemListContainer
