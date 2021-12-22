import React from "react";
import questao from "./Questoes";
import Button from 'react-bootstrap/Button';
import { useState } from "react";

const [questaoAtual, setQuestaoAtual] = useState(0);
const [pontos, setPontos] = useState(0);

const respQuestaoClick = (respCorreta) => {
    if (respCorreta) {
        setPontos(pontos + 1);
    }
}

const RespQuestao = () =>{

return(<>
    <div>
        <p> {questao[questaoAtual].questTexto}</p>
        <p> {questao[questaoAtual].questPerg}</p>
    </div>
    <div>
        {questao[questaoAtual].questResp.map((opResp) => (
            <p onClick={() => respQuestaoClick(opResp.respCorreta)}>{opResp.respTexto}</p>
        ))}
    </div>
    </>
)
}

export default RespQuestao;

/* <input type="radio" value="x" name="alternativas" ></input> a)  <br/>
     <input type="radio" value="#" name="alternativas" ></input> b) Questão 2 Aqui<br/>
     <input type="radio" value="#" name="alternativas" ></input> c) Questão 3 Aqui <br/>
     <input type="radio" value="#" name="alternativas" ></input> d) Questão 4 Aqui <br/>
     <input type="radio" value="#" name="alternativas" ></input> e) Questão 5 Aqui <br/>
*/