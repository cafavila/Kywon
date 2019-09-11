import React, {useState} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {registerRequest} from '../actions'
import '../assets/styles/components/Register.scss'

const Register = (props) => {
    const [form, setValuesForm] = useState({
        email: '',
        name: '',
        password: ''
    })
    const handleInput = event => {
        setValuesForm({...form, [event.target.name]: event.target.value})
    }
    const handleSummit = event => {
        event.preventDefault()
        props.registerRequest(form)
        props.history.push("/")
    }

    return (<section className="register">
    <section className="register__container">
        <h2>Registro de Usuarios</h2>
        <form className="register__container--form" onSubmint={handleSummit}>
            <input className="input__register" name="name" type="text" placeholder="Nombre" onChange={handleInput}/>
            <input className="input__register" name="email" type="text" placeholder="Correo" onChange={handleInput}/>
            <input className="input__register" name="password" type="password" placeholder="Contraseña" onChange={handleInput}/>
            <button className="button">Registrar</button>
        </form>
        <div className="register__container--login">
            <Link to="/login">Iniciar Sesion</Link>
        </div>
    </section>
</section>)}

const mapDispatchToProps = {
    registerRequest
}
export default connect(null, mapDispatchToProps)(Register)