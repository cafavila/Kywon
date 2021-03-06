import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logoutRequest} from '../actions'
import gravatar from '../utils/gravatar'
import logo from '../assets/static/kylogo.png'
import userIcon from '../assets/static/user_icon-icons.com_66546.png'
import '../assets/styles/components/Header.scss'

const Header = (props) => {
    const {user} = props
    const hasUser = Object.keys(user).length > 0

    const handleLogout = () => {
        props.logoutRequest({})
    }
    return (<header className="header">
    <Link to="/">
        <img className="header__img" src={logo} alt="logoKywon"/>
    </Link>
    <div className="header__menu">
        <div className="header__menu--profile">
            {
                hasUser ? <img src={gravatar(user.email)} alt={user.email} />
                    : <img src={userIcon} alt="Perfil" />
            }
            <p>Perfil</p>
        </div>
        <ul>
            {
                hasUser ? <li><Link to="/">{user.email}</Link></li> : null
            }
            {
                hasUser ? <li><a href="#logout" onClick={handleLogout}>Cerrar Sesion</a></li> : <li><Link to="/login">Iniciar Sesion</Link></li>
            }
        </ul>
    </div>
</header>)}

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

const mapDispatchToProps = {
    logoutRequest
}
export default connect(mapStateToProps, mapDispatchToProps)(Header)