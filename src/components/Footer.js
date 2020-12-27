import React from 'react'
import NavBar from './NavBar'

const Footer = () => {
    return (
        <footer>
            <div className="footer">
                <div className="footer_column">
                    <h3>Ingresos Recientes:</h3>

                </div>
                <div className="footer_column">
                    <h3>Ofertas del mes:</h3>

                </div>
                <div className="footer_column">
                    <h3>Mapa del Sitio:</h3>
                    <NavBar/>
                </div>
            </div>
            <small className="copy">Halias &copy; | 2021 - Todos los derechos reservados</small>
        </footer>
    )
}

export default Footer