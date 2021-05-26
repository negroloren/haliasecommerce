import React, {useEffect, useState, useContext} from 'react'
import DolarContext from './DolarContext'
import axios from 'axios'

const Dolar = () => {

    //const [dolar, setDolar] = useState()

    const [iconDolar, setIconDolar] = useState("")

    /*
    useEffect(() => {        
        //const bcra_dolar = "https://api.estadisticasbcra.com/usd"
        //const bcra_dolar_of = "https://api.estadisticasbcra.com/usd_of"
        //fetch("https://www.dolarsi.com/api/api.php?type=valoresprincipales")
        const dolares_bcra = axios.get('https://api.bluelytics.com.ar/v2/latest',{
                method: 'GET',
                mode: 'no-cors'
            })
        .then(resp => {
        console.log(resp.data);
        setDolar(resp.data.oficial.value_sell)
        })
        .catch(error => {
            console.log(error);
        })

        }, [dolar]);
    
    */

    const { dolar } = useContext(DolarContext)

    const toggleChecked = () => {
        console.log("click")
        setIconDolar(value => !value)
    }

    return (
        <div className="dolar">
            <label className="switch">
                <input type="checkbox" onChange={toggleChecked}/>
                <span className={"slider round " + iconDolar}></span>
            </label>
            {<span>1 u$d - AR$ {dolar}</span>}
        </div>
    )
}

export default Dolar
