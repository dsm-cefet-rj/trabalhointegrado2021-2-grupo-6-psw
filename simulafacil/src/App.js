import React from "react";
import "./App.css";
import "./Componentes/Sidebar/Sidebar"
import Sidebar from "./Componentes/Sidebar/Sidebar";

const App = () => {
    return(
        <>
        <h1>Hellow</h1><ul>
            <Sidebar></Sidebar>
        </ul>
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