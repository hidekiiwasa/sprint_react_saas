import {} from 'react'
import '../styles/components/_home.css'


function Home() {
    return(
        <>
            <div className="homecontainer">
                <div className='home'>
                    <div className="conteudo-home">
                        <p>Inscreva-se para receber novidades sobre o nosso projeto</p>
                        <input type="email" placeholder='email@gmail.com' id='inputEmail'/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home