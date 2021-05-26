import React from 'react'
import {motion} from 'framer-motion'

let transition = {duration: 3, ease: [0.43, 0.13 , 0.23, 0.96]}

const Home = () => {
    return (
        <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={transition}
        className="intro centrado">
            {/*<h1>halias</h1>*/}
            <h2 className="aparecer_top">Energía pensada para reducir costos y aumentar valor.</h2>
            <p className="aparecer_top">Calefacción eficiente, calderas, radiadores, piso radiante, bombas de calor y energía solar. Encontrá todo acá.</p>
        </motion.div>
    )
}

export default Home
