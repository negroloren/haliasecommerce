import React from 'react'
import {motion} from 'framer-motion'

const Ofertas = () => {
    return (
        <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="intro">
            <h1>Ofertas</h1>
            <p>Por el momento no tenemos ofertas para ofrecerte</p>
        </motion.div>
    )
}

export default Ofertas
