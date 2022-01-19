import React from "react";
import questao from "./Questoes";
import Button from 'react-bootstrap/Button';
import Paginacao from "../Paginação/Paginacao"
import "../../index.css"
import { useState } from "react";
import { Link } from "react-router-dom";

const RespQuestao = () =>{

    const [questaoAtual, setQuestaoAtual] = useState(0);
    const [pontos, setPontos] = useState(0);
    const proxQuestao = questaoAtual +1;
    const antQuestao = questaoAtual -1;


    const respQuestaoClick = (respCorreta) => {
        if (respCorreta) {
            setPontos(pontos + 1);
        }
    }

return(<>
    <div className="questbox">
        <p> {questao[questaoAtual].questTexto}</p>
        <p> {questao[questaoAtual].questPerg}</p>
    </div>
    <div className="questbox">
    {questao[questaoAtual].questResp.map((opResp) => (
            <label>
                <input type="radio" value="female" name="gender" onClick={() => respQuestaoClick(opResp.respCorreta)}/>{opResp.respTexto}
                <br/>
            </label>
        ))}
    </div>
    
    <div className="paginac">
    <Paginacao
    pagTotal = {questao.length}
    pagAtual = {questaoAtual + 1}
    nxt = {questaoAtual}/>
    </div>
    <div>
        <Link to='/'>
        <Button>Retornar</Button>
         </Link>
    </div>
    </>
)
}

export default RespQuestao;

    /*<div className="questbox">
        {questao[questaoAtual].questResp.map((opResp) => (
            <p onClick={() => respQuestaoClick(opResp.respCorreta)}>{opResp.respTexto}</p>
        ))}
    </div>*/

/* <input type="radio" value="x" name="alternativas" ></input> a)  <br/>
     <input type="radio" value="#" name="alternativas" ></input> b) Questão 2 Aqui<br/>
     <input type="radio" value="#" name="alternativas" ></input> c) Questão 3 Aqui <br/>
     <input type="radio" value="#" name="alternativas" ></input> d) Questão 4 Aqui <br/>
     <input type="radio" value="#" name="alternativas" ></input> e) Questão 5 Aqui <br/>
*/