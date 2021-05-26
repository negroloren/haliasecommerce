import React from 'react'
import {Link} from 'react-router-dom'
import bookmark from '../imagenes/bookmark.svg'
import {motion} from 'framer-motion'

let transition = {ease: [0.43, 0.13 , 0.23, 0.96]}

const Item = ({title,identificador,price,imagen,url}) => {  

    function stopDefAction(evt) {
        // evt.preventDefault();
    }

    return (
            <motion.li             
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            id={identificador} className="item">                     
                <Link to={"/productos/" + url} title={title} onClick={stopDefAction}>
                    <div className="imagen"><motion.img whileHover={{scale:1.1}} src={imagen} alt={title} transition={transition}/></div>
                    <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={transition}
                    className="detalles">
                        <h2>{title}</h2>
                        <p>${price}</p>
                        <small>ID: {identificador}</small>
                    </motion.div>
                    <span className="bockmark"><img src={bookmark} alt="bookmark" width="20px"/></span>
                </Link>
            </motion.li>
    )
}

export default Item
