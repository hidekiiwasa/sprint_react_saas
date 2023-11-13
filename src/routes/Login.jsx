import { useState, useEffect } from 'react'
import '../styles/components/_login.css'
import loginData from '../login.json'

function Login() {

    const [loginDetails, setLoginDetails] = useState({ email: '', senha: '' });

    const handleChange = e => {
        setLoginDetails({ ...loginDetails, [e.target.name]: e.target.value });
    };

    const handleSubmit = e => {

        console.log("Email digitado:", loginDetails.email);
        console.log("Senha digitada:", loginDetails.senha);
        
        e.preventDefault();

        const usuarioEncontrado = loginData.login.find(
        user => user.email === loginDetails.email && user.senha === loginDetails.senha
        )




        if (usuarioEncontrado) {
        alert('Login bem-sucedido!');
        window.location='/'

        } else {
        alert('Credenciais inválidas. Tente novamente.');

        }
    };

    
    
    return(
        <>
            <div className="logincontainer">
                <div className="loginconteudo">
                    <form onSubmit={handleSubmit}>
                        <div className="inputcontainer">
                            <label htmlFor='email'>email:</label>
                            <input id="email" onChange={handleChange} type="email" name='email' placeholder='email@gmail.com'/>
                        </div>
                        <div className="inputcontainer">
                            <label htmlFor='senha'>senha:</label>
                            <input id="senha" onChange={handleChange} type="password" name='senha' placeholder='12345678xxx'/>
                        </div>
                        <div className="botaologin">
                            <button type='submit'>LOGIN</button>
                            <a href="/cadastro">Criar uma conta?</a>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login