import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../assets/styles/App.scss'

const Layout = ({children}) => (<div className="App">
    <Header/>
    {children}
    <Footer/>
</div>)

export default Layout