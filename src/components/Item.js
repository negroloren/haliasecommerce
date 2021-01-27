import React from 'react'
import {Link} from 'react-router-dom'
import bookmark from '../imagenes/bookmark.svg'

const Item = ({title,identificador,price,imagen,url}) => {
   
    return (
            <li id={identificador} className="item aparecer_bottom">
                <div className="imagen"><img src={imagen} alt={title}/></div>
                <div className="detalles">
                    <h2>{title}</h2>
                    <p>${price}</p>
                    <small>ID: {identificador}</small>
                    <div className="item-links">
                        <Link to={"/productos/" + url} title={title}>Detalles</Link>
                        <span className="bockmark"><img src={bookmark} alt="bookmark" width="20px"/></span>
                    </div>
                </div>
            </li>
    )
}

export default Item
