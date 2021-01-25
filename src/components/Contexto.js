import {createContext} from 'react'


const usuariosIniciales = [
    {
        id: 1,
        nombre: "Pablo"
    },
    {
        id: 2,
        nombre: "Valentina"
    }
]


// Contexto: Patrón de diseño de Publicación y Subscripción

const Contexto = createContext({usuarios:usuariosIniciales})

export const {Consumer,Provider} = Contexto
export default Contexto





