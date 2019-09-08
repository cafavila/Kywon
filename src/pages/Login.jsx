import React from 'react'
import {Link} from 'react-router-dom'
import googleIcon from '../assets/static/3721671-google_108054.png'
import twitterIcon from '../assets/static/3721677-twitter_108058.png'
import '../assets/styles/components/Login.scss'

const Login = () => (<section className="login">
    <section className="login__container">
        <h2>Iniciar Sesion</h2>
        <form className="login__container--form">
            <input className="input__login" type="text" placeholder="Correo"/>
            <input className="input__login" type="password" placeholder="Contraseña"/>
            <button className="button">Iniciar Sesion</button>
            <div className="login__container--remember">
                <label for="">
                    <input type="checkbox" id="chbx_remem" value="checkbox"/>Recuerdame
                </label>
                <a href="/">Olvide mi contraseña</a>
            </div>
        </form>
        <section className="login__container--socialmedia">
            <div><img src={googleIcon} alt="Google"/>Inicia Sesion con Google</div>
            <div><img src={twitterIcon} alt="Twitter"/>Inicia Sesion con Twitter</div>
        </section>
        <section className="">
            <p className="login__container--register">Si no tienes cuenta, <Link to="/register">Registrate</Link></p>
        </section>
    </section>
</section>)

export default Login