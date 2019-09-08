import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../assets/static/kylogo.png'
import userIcon from '../assets/static/user_icon-icons.com_66546.png'
import '../assets/styles/components/Header.scss'

const Header = () => (<header className="header">
    <Link to="/">
        <img className="header__img" src={logo} alt="logoKywon"/>
    </Link>
    <div className="header__menu">
        <div className="header__menu--profile">
            <img src={userIcon} alt="Perfil" />
            <p>Perfil</p>
        </div>
        <ul>
            <li><a href="/">Cuenta</a></li>
            <li><Link to="/login">Iniciar Sesion</Link></li>
        </ul>
    </div>
</header>)

export default Header