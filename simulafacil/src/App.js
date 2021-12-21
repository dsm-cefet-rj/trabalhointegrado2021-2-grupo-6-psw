import React from "react";
import "./App.css";
import { VisualizarEvento } from "./Componentes/Evento/VisualizarEventos";
import { CriarExame } from "./Componentes/Exame/CriarExame";
import { Header } from "./Componentes/Header/Header";
import CriarQuestao from "./Componentes/Questao/CriarQuestao";
import "./Componentes/Sidebar/Sidebar";
import "./index.css"


const App = () => {
    return(
        <>
        <Header/>
        <VisualizarEvento />
        <CriarExame/>
        <CriarQuestao/>
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