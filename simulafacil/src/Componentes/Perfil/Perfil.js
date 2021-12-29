import React from "react"
import "./Perfil.css"


function Perfil (){
    
    return(
        <div>
            <div>
                <h1>Perfil do Usuário</h1>
            </div>
            <div>
                <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png"/>
                <h2>João da Silva</h2>
            </div>
            <div>
                <h3>Progresso Geral: </h3>
                <p>Nível 1/:</p>
                <progress value = "125" max = "250"/>
            </div>
            <div>
                <h3>Bio: </h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis ex dolorum autem ratione similique impedit laborum non? Aliquam nemo accusantium quis ipsam architecto voluptas porro. Ullam veniam voluptates ipsum totam.</p>
            </div>
            <div>
                <h3>Matérias preferidas: </h3>
                <ul>
                    <li>Matemática</li>
                    <li>Português</li>
                    <li>Inglês</li>
                    <li>História</li>
                </ul>
            </div>
        </div>
    )
}

export default Perfil;