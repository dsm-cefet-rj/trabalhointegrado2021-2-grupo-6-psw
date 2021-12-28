import React from "react";
import "./App.css";
import { VisualizarEvento } from "./Componentes/Evento/VisualizarEventos";
import { CriarExame } from "./Componentes/Exame/CriarExame";
import { Header } from "./Componentes/Header/Header";
import RespQuestao from "./Componentes/Questao/RespQuestao";
import Paginacao from "./Componentes/Paginação/Paginacao";
import Cartao from "./Componentes/Cartao/Cartao";
import "./Componentes/Sidebar/Sidebar";
import "./index.css"
import { VerExame } from "./Componentes/Exame/VerExame";


const App = () => {
    return(
        <>
        <Header/>
        <VisualizarEvento />
        <Cartao
        img="https://www.stoodi.com.br/wp-content/uploads/2018/08/Enem.jpg"
        titulo="Simulado"
        texto="Faça uma prova objetiva."
        botao="Acessar"/>
        <CriarExame/>
        <RespQuestao/>
        <Paginacao/>
        <VerExame/>
        </>
    )
}

/*function App() {
    return(
        <div>
            <h1>Hello World</h1>
        </div>
    )
}*/

export default App;