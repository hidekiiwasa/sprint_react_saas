import {} from 'react'
import '../styles/components/sobre.css'

function Sobre() {
    return (
        <>
            <div className="sobrecontainer">
                <div className="sobreconteudo">
                    <p className='sobretexto'>O Agro Solution é um grupo dedicado à inovação na agricultura, composto atualmente por quatro membros, todos eles estudantes da faculdade FIAP. Nossa missão é desenvolver soluções que não apenas facilitem o controle das plantações agrícolas, mas também contribuam para a redução do desperdício de recursos e consequentemente minimizem o impacto ambiental.</p>
                    <div className="lista">
                        <ul>
                            <h1>MEMBROS:</h1>
                            <li>Enzo Vasconcelos de Oliveira Santos;</li>
                            <li>Felipe Hideki Iwasa;</li>
                            <li>Vinicius Monteiro Pina;</li>
                            <li>Pedro Henrique Guerra Neves.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sobre