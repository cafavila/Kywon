import React from 'react'
import logo from '../assets/static/kylogo.png'
import userIcon from '../assets/static/user_icon-icons.com_66546.png'
import '../assets/styles/components/Header.scss'

const Header = () => (<header className="header">
<img className="header__img" src={logo} alt="logoKywon"/>
<div className="header__menu">
    <div className="header__menu--profile">
        <img src={userIcon} alt="Perfil" />
        <p>Perfil</p>
    </div>
    <ul>
        <li><a href="/">Cuenta</a></li>
        <li><a href="/">Cerrar Session</a></li>
    </ul>
</div>
</header>)

export default Header