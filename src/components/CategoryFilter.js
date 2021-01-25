import React from 'react'
import {NavLink} from 'react-router-dom'

const CategoryFilter = () => {

    const categorias = [  
        {
            id: 1,
            category: "Energía Solar",
            category_url: "energia_solar",
        },
        {
            id: 2,
            category: "Energía Solar Térmica",
            category_url: "energia_solar_termica",
        },
        {
            id: 3,
            category: "Energía Aerotérmica",
            category_url: "aerotermia",
        },
        {
            id: 4,
            category: "Calefacción",
            category_url: "calefaccion",
        }
      ]

    return (
        <>
            { categorias.map((categoria) =>{
                return (
                    <li>
                        <NavLink key={categoria.id} to={"/categorias/"+ categoria.category_url}>{categoria.category}</NavLink>
                    </li>
                );
                })
            }
            <li>
                <NavLink exact to="/">Todos</NavLink>
            </li>
        </>
    )
}

export default CategoryFilter
