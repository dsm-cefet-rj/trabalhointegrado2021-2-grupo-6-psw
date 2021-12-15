import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import menu from './Menu.jsx'

const logotipo = <h2> TESTE</h2>


function mennu (){
    return(
        <div className ="Menus">
            <menu/>
        </div>
    )
}

const rootElement = document.getElementById("root")
ReactDOM.render(<mennu/>, rootElement)