import { useState, useContext } from 'react'

import Input from '../../form/Input'
import {Link} from 'react-router-dom'

import styles from '../../form/Form.module.css'

/* context */
import { Context } from '../../../context/UserContext'

function Register() {
    const [user, setUser] = useState({})
    const  { register } = useContext(Context)

    function handlenChange(e) {
        setUser({...user, [e.target.name]: e.target.value})
    }

    function handleSubmit(e) {
        e.preventDefault()
        register(user)


    }

    return(
        <section className={styles.form_container}>
            <h1>Registrar</h1>
            <form onSubmit={handleSubmit}>
                <Input 
                    text="Nome"
                    type="text"
                    name="name"
                    placeholder="Digite o seu nome"
                    handlenChange={handlenChange}
                />
                <Input 
                    text="Telefone"
                    type="text"
                    name="phone"
                    placeholder="Digite o seu telefone"
                    handlenChange={handlenChange}
                />
                <Input 
                    text="Email"
                    type="email"
                    name="email"
                    placeholder="Digite o seu e-mail"
                    handlenChange={handlenChange}
                />
                <Input 
                    text="Senha"
                    type="password"
                    name="password"
                    placeholder="Digite a sua senha"
                    handlenChange={handlenChange}
                />
                <Input 
                    text="Confirmação de Senha"
                    type="password"
                    name="confirmpassword"
                    placeholder="Confirme a sua senha"
                    handlenChange={handlenChange}
                />
                <input type="submit" value="Cadastrar"/>
            </form>
            <p>
                Já tem conta? <Link to="/login">Clique aqui!</Link>
            </p>
        </section>
    )
}

export default Register