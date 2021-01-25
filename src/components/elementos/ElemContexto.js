import React, {useContext, useEffect} from 'react'
import ElemItemContaxto from './ElemItemContaxto'
import Contexto from '../Contexto'

const ElemContexto = () => {

    // Consumer 
    // Esto solo me sirve para trabajarlo dentro de un render porque utiliza JSX
    // Por ello usamos el Hook de useContext

    /*
    return (
                <Consumer>
                    {({usuarios}) => {
                        return (
                            <ul>
                                {usuarios.map(usuario =>(
                                    <ElemItemContaxto key={usuario.id} nombre={usuario.nombre}/>
                                    ))
                                }
                            </ul>
                        )
                    }}
                </Consumer>
        )
    }
    */

    // Utilizo el contexto con el Hook useContext:

    //const {usuarios} = useContext(Contexto)
    const {usuarios} = useContext(Contexto)
    
    useEffect(() => {
        //console.log("Estos son los usuarios: " + usuarios)
    })

    return (
            <ul>
                {usuarios.map(usuario =>(
                    <ElemItemContaxto key={usuario.id} nombre={usuario.nombre}/>
                    ))
                }
            </ul>
        )
    }

export default ElemContexto
