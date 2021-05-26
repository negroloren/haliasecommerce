import React, {useEffect,useState} from 'react'
import axios from 'axios'


const Hubspot = () => {

    // Clave API 
    let api_halias = "e60a551f-7ea4-4dc4-8e07-de513aa50239";
    let crear_contacto = "https://api.hubapi.com/contacts/v1/contact/?hapikey=" + api_halias;
    let obtener_contacto = "https://api.hubapi.com/contacts/v1/lists/all/contacts/all?hapikey="+ api_halias;

    useEffect(() => {        
    const obtengo_contactos = axios.get(obtener_contacto,{
        method: 'GET',
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
            'Authorization': 'Bearer e60a551f-7ea4-4dc4-8e07-de513aa50239',
            'Content-Type': 'application/json; charset=utf-8'
        }
    })
    .then(resp => {
    console.log(resp);
    })
    .catch(error => {
    console.log(error);
    })

    }, []);


        return (
            <div>
                
            </div>
        )
    }

export default Hubspot
