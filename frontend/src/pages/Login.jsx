import React, {useState} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {loginRequest} from '../actions'
import googleIcon from '../assets/static/3721671-google_108054.png'
import twitterIcon from '../assets/static/3721677-twitter_108058.png'
import '../assets/styles/components/Login.scss'

const Login = props => {
    const [form, setValuesForm] = useState({email: ''})
    const handleInput = event => {
        setValuesForm({...form, [event.target.name]: event.target.value})
    }
    const handleSubmit = event => {
        event.preventDefault()
        props.loginRequest(form)
        props.history.push("/")
    }

    return (<section className="login">
    <section className="login__container">
        <h2>Iniciar Sesion</h2>
        <form className="login__container--form" onSubmit={handleSubmit}>
            <input className="input__login" name="email" type="text" placeholder="Correo" onChange={handleInput}/>
            <input className="input__login" name="password" type="password" placeholder="Contraseña" onChange={handleInput}/>
            <button className="button">Iniciar Sesion</button>
            <div className="login__container--remember">
                <label>
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
</section>)}

const mapDistpachToProps = {
    loginRequest
}
export default connect(null, mapDistpachToProps)(Login)