import { useState, useEffect } from 'react'
import '../styles/components/_login.css'

function Login() {
    
    return(
        <>
            <div className="logincontainer">
                <div className="loginconteudo">
                    <form>
                        <div className="inputcontainer">
                            <label htmlFor='email'>email:</label>
                            <input id="email" type="email" placeholder='email@gmail.com'/>
                        </div>
                        <div className="inputcontainer">
                            <label htmlFor='senha'>senha:</label>
                            <input id="senha" type="password" placeholder='12345678xxx'/>
                        </div>
                        <div className="botaologin">
                            <button>LOGIN</button>
                            <a href="/cadastro">Criar uma conta?</a>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login