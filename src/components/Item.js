import React from 'react'
import {Link} from 'react-router-dom'

const Item = (props) => {
    /*    
    const promesa = new Promise((res,rej) => {
        
        const codigo = 200
        const respuesta = [1,2,3]
        
        if (codigo===200){
            res(respuesta)
        } else {
            rej()
        }
        console.log(promesa)
    })
    */

   const {title,identificador,price,imagen,url} = props
   
    return (
            <li id={identificador}>
                <img src={imagen} alt={title}/>
                <h2>{title}</h2>
                <p>${price}</p>
                <small>Identificador único: {identificador}</small>
                <Link to={"/productos/" + url} title={title}>Detalles</Link>
            </li>
    )
}

export default Item
