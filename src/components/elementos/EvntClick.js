import React from 'react'

const EvntClick = () => {

    // Eventos:
    // onClick
    // onKeyUp
    // onKeyDown
    // onChange

    const hacerClick = (event) => {
        console.log("click")
        // Este evento me devuelve un objeto
        // Por ejemplo: que tipo de evento es: onClick | target: button | posición del evento: clientX | etc
        console.log(event) 
        console.log(event.target) 
    }

    return (
        <div>
            <button onClick={hacerClick}>Hacer click</button>        
        </div>
    )
}

export default EvntClick
