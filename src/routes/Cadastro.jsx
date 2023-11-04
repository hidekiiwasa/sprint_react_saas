import { useState } from 'react'


function Cadastro() {

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem("email", email)
        localStorage.setItem("senha", pass)
    }
    return(
        <>
            <div className="cadastrocontainer">
                <div className="cadastroconteudo">
                    <form onSubmit={handleSubmit}>
                        <div className="inputcontainer">
                            <label htmlFor='email'>email:</label>
                            <input value={email} onChange={(e) => setEmail(e.target.value)} id="email"type="email" placeholder='email@gmail.com'/>
                        </div>
                        <div className="inputcontainer">
                            <label htmlFor='senha'>senha:</label>
                            <input value={pass} onChange={(e) => setPass(e.target.value)} id="senha" type="password" placeholder='12345678xxx'/>
                        </div>
                        <div className="botaologin">
                            <button>CRIAR</button>
                            <a href="/login">Já tem conta?</a>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Cadastro