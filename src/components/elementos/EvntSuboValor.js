import React from 'react'

const EvntSuboValor = ({editoValor, tomoValor, textoCarrito}) => {



    return (
        <div>
            <input type="text" onChange={editoValor} />
            <button onClick={tomoValor}>{textoCarrito}</button>
        </div>
    )
}

export default EvntSuboValor
