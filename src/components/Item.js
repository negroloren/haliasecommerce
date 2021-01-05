import React from 'react'


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

   const {title,identificador,price,imagen} = props
   
    return (
            <li id={identificador}>
                <img src={imagen} alt={title}/>
                <h2>{title}</h2>
                <p>${price}</p>
                <small>Identificador único: {identificador}</small>
                <a href="/" title={title}>Detalles</a>
            </li>
    )
}

export default Item
