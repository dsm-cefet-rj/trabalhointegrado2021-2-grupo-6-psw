import React from "react"
import './index.css';
import "./bootstrap/css/bootstrap.css"
import quest from "./Quest.jsx"

function questao(props){
    <>
    const { Num } = props

 <div>
     <p class="questao">
         quest[Num].texto
     </p>
     <p class="questao">
         quest[Num].pergunta
     </p>
     <input type="radio" name="question">quest[Num].quesA</input>
     <input type="radio" name="question">quest[Num].quesB</input>
     <input type="radio" name="question">quest[Num].quesC</input>
     <input type="radio" name="question">quest[Num].quesD</input>
     <input type="radio" name="question">quest[Num].quesE</input>
 </div>
</>
}

export default Quest