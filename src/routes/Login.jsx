import { } from 'react'
import '../styles/components/_login.css'

function Login() {
    
    
    const emailCadastro = localStorage.getItem("email");
    const senhaCadastro = localStorage.getItem("senha");


    const handleSubmit = (e) => {
        e.preventDefault();
        const emailLogin = document.getElementById('email').value
        const senhaLogin = document.getElementById('senha').value
        if(emailCadastro === emailLogin && senhaCadastro === senhaLogin) {
            alert("Login efetuado")
        } else {
            alert("Login incorreto")
        }
    }

    return(
        <>
            <div className="logincontainer">
                <div className="loginconteudo">
                    <form onSubmit={handleSubmit}>
                        <div className="inputcontainer">
                            <label htmlFor='email'>email:</label>
                            <input onChange={(e) => setEmail(e.target.value)} id="email" type="email" placeholder='email@gmail.com'/>
                        </div>
                        <div className="inputcontainer">
                            <label htmlFor='senha'>senha:</label>
                            <input onChange={(e) => setPass(e.target.value)} id="senha" type="password" placeholder='12345678xxx'/>
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