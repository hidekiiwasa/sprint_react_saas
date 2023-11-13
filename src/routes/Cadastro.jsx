import { useState } from 'react'


function Cadastro() {

    const [novo, setNovo] = useState({
        email:"",
        senha:"",
    })
    
    const handleChange =(e)=>{
        setNovo({...novo, [e.target.name]:e.target.value});
    };

    const handleSubmit =(e)=>{
        e.preventDefault();

        fetch("http://localhost:5000/login/",{
        method:'post',
        headers:{
            'Content-Type':'application/json',
        },
        body:JSON.stringify(novo),
        }).then(()=>{
        window.location='/';
        }), [];
    }

    return(
        <>
            <div className="cadastrocontainer">
                <div className="cadastroconteudo">
                    <form onSubmit={handleSubmit}>
                        <div className="inputcontainer">
                            <label htmlFor='email'>email:</label>
                            <input value={novo.email} name='email' onChange={handleChange} id="email"type="email" placeholder='email@gmail.com'/>
                        </div>
                        <div className="inputcontainer">
                            <label htmlFor='senha'>senha:</label>
                            <input value={novo.senha} name='senha' onChange={handleChange} id="senha" type="password" placeholder='12345678xxx'/>
                        </div>
                        <div className="botaologin">
                            <button type='submit'>CRIAR</button>
                            <a href="/login">Já tem conta?</a>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Cadastro