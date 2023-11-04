import {} from 'react'
import '../styles/components/proposta.css'
import estatisticas from '../assets/1.jpg'
import prato from '../assets/2.jpg'
import arduino from '../assets/3.jpg'

function Proposta() {
    return(
        <>
            <div className="propostacontainer">
                <div className="propostaconteudo">
                    <div className="info">
                        <p>Em 2021, a fome afetou 58 países, com 193 milhões de pessoas famintas. Acrise alimentar persistiu até 2022, impactando cerca de 163 milhões de pessoas em paises como Ucrânia, Sudão, Síria, Afeganistão e Nigéria. A FAO e a ONU relataram que aproximadamente 260 milhões de pessoas enfrentaram fome, com uma previsão de aumento na insegurança alimentar de 21,3% em 2021 para 22,7 em 2022.</p>
                        <img src={prato}/>
                    </div>
                    <div className="info">
                        <img src={estatisticas}/>
                        <p>Devido ao rápido crescimento populacional, é necessário combater a fome e aumentar a produção de alimentos. Um dispositivo com sensores de umidade foi desenvolvido para identificar áreas de cultivo de alta qualidade, melhorando a eficiência da produção e permitindo que mais pessoas se beneficiem dos alimentos.</p>
                    </div>
                    <div className="info">
                        <img src={arduino}/>
                        <p>O dispositivo fornece informações precisas sobre a qualidade do solo, permitindo que agricultores otimizem o uso de água e economizem recursos, reduzindo o impacto ambiental</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Proposta