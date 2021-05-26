import React, {useEffect, useState} from 'react'
import axios from 'axios'
import DolarContext from './DolarContext'

    const DolarState = ({children}) => {

        const [dolar, setDolar] = useState()

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

        return (
            <DolarContext.Provider value={{dolar}}>
                {children}
            </DolarContext.Provider>
        )
    }

export default DolarState
