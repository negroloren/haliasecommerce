import React from 'react'
import Header from "./components/Header"
import Footer from "./components/Footer"
import Main from './components/Main'
import {BrowserRouter} from 'react-router-dom'

const App = () => {
    return(
        <BrowserRouter>
            <Header/>
            <Main/>
            <Footer/>
        </BrowserRouter>
    )
}

export default App