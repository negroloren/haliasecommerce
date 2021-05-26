import React from 'react'
import {motion} from 'framer-motion'

const MiCuenta = () => {
    return (
        <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="intro">
            <h1>Mi cuenta</h1>
            <p>Tu cuenta no tiene datos por ahora.</p>
        </motion.div>
    )
}

export default MiCuenta
