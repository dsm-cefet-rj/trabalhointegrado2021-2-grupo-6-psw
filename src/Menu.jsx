import React from "react"
import './index.css';
import "./bootstrap/css/bootstrap.css"


function menu() {
   return(
   <div>
    <div id="serviços">
        <div class="container-fluid text-center margin serviços">
            <h2>Criadores</h2>
            <div class="margem3 container">
                <div class="row">
                    <div class="col-lg-4 margin">

                        <h3>Arthur Coutto</h3>
                        <p>Estudante de BCC no CEFET/RJ, aprendendo como criar websites.</p>
                    </div>
                    <div class="col-lg-4 margin">

                        <h3>Daniel Motta</h3>
                        <p>Estudante de Ciência da Computação em CEFET/RJ, coloborador do projeto de PSW SimulaFácil.</p>
                    </div>
                    <div class="col-lg-4 margin">
                        <h3>Gabriel Rodrigues</h3>
                        <p>Estudante de BCC no Centro Federal de Educação Tecnológica Celso Suckow da Fonseca do Rio de Janeiro.</p> 
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    )
}

export default menu