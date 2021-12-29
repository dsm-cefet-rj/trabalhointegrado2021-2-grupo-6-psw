import React from "react"
import { Link } from "react-router-dom"
import Cartao from "../Cartao/Cartao"
import "./Home.css"

const Home = () =>{

    return(
        <>
            <div className="menu">
                <div className="card">
                    <Cartao
                        img="https://conteudo.imguol.com.br/c/noticias/f6/2020/06/26/imagem-de-prova-do-enem-1593183331646_v2_450x337.jpg"
                        titulo="Simulado"
                        texto="Faça uma prova objetiva."
                        botao="Acessar"
                        dir="/RespQuestao"/>
                </div>
                <div className="card">
                    <Cartao
                        img="https://www.colegiosantoantonio.com.br/wp-content/uploads/2017/01/classroom.jpg"
                        titulo="Evento"
                        texto="Organize um evento."
                        botao="Acessar"
                        dir="/CriarExame"/>
                </div>
                <div className="card">
                    <Cartao
                        img="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png"
                        titulo="Perfil"
                        texto="Acesse o seu perfil de usuário."
                        botao="Acessar"
                        dir="/Perfil"/>
                </div>
            </div>
        </>
    )
}

export default Home;