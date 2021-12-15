import React from "react"
import './index.css';
import "./bootstrap/css/bootstrap.css"

    var questao = class questao{
        constructor(texto, pergunta, quesA, quesB, quesC, quesD, quesE){
            this.texto = texto;
            this.pergunta = pergunta;
            this.quesA = quesA;
            this.quesB = quesB;
            this.quesC = quesC;
            this.quesD = quesD;
            this.quesE = quesE;
        }

        set texto(props){
            this.texto = props;
        }
        get texto(){
            return this.texto;
        }
        set pergunta(props){
            this.pergunta = props;
        }
        get pergunta(){
            return this.pergunta;
        }
        set quesA(props){
            this.quesA = props;
        }
        get quesA(){
            return this.quesA;
        }
        set quesB(props){
            this.quesB = props;
        }
        get quesB(){
            return this.quesB;
        }
        set quesC(props){
            this.quesC = props;
        }
        get quesC(){
            return this.quesC;
        }
        set quesD(props){
            this.quesD = props;
        }
        get quesD(){
            return this.quesD;
        }
        set quesE(props){
            this.quesE = props;
        }
        get quesE(){
            return this.quesE;
        }
    }
        /*{texto:"Com base nos experimentos de plantas de Mendel, foram estabelecidos três princípios básicos, que são conhecidos como leis da uniformidade, segregação e distribuição independente. A lei da distribuição independente refere-se ao fato de que os membros de pares diferentes de genes segregam-se independentemente, uns dos outros, para a prole.",
        pergunta:"Hoje, sabe-se que isso nem sempre é verdade. Por quê?",
        quesA:"a) A distribuição depende do caráter de dominância ou recessividade do gene.",
        quesB:"b) Os organismos nem sempre herdam cada um dos genes de cada um dos genitores.",
        quesC:"c) As alterações cromossômicas podem levar a falhas na segregação durante a meiose.",
        quesD:"d) Os genes localizados fisicamente próximos no mesmo cromossomo tendem a ser herdados juntos.",
        quesE:" e) O cromossomo que contém dois determinados genes pode não sofrer a disjunção na primeira fase da meiose."
        },
        {texto:"Será que uma miragem ajudou a afundar o Titanic? O fenômeno ótico conhecido como Fata Morgana pode fazer com que uma falsa parede de água apareça sobre o horizonte molhado. Quando as condições são favoráveis, a luz refletida pela água fria pode ser desviada por uma camada incomum de ar quente acima, chegando até o observador, vinda de muitos ângulos diferentes. De acordo com estudos de pesquisadores da Universidade de San Diego, uma Fata Morgana pode ter obscurecido os icebergs da visão da tripulação que estava a bordo do Titanic. Dessa forma, a certa distancia, o horizonte verdadeiro fica encoberto por uma névoa escurecida, que se parece muito com águas calmas no escuro.",
            pergunta:"O fenômeno ótico que, segundo os pesquisadores, provoca a Fata Morgana é a" ,
            quesA:"a) Ressonância" ,
            quesB:"b) Refração" ,
            quesC:"c) Difração" ,
            quesD:"d) Reflexão" ,
            quesE:"e) Difusão" ,
        },

        {texto:"A soda cáustica pode ser usada no desentupimento de encanamentos domésticos e tem, em sua composição, o hidróxido de sódio como principal componente, além de algumas impurezas. A soda normalmente é comercializada na forma sólida, mas que apresenta aspecto 'derretido' quando exposta ao ar por certo período.",
            pergunta:"O fenômeno de 'derretimento decorre' da" ,
            quesA:"a) Absorção da umidade presente no ar atmosférico." ,
            quesB:"b) Fusão do hidróxido pela troca de calor com o ambiente." ,
            quesC:"c) Reação das impurezas do produto com o oxigênio do ar." ,
            quesD:"d) Adsorção de gases atmosféricos na superfície do sólido." ,
            quesE:"e) Reação do hidróxido de sódio com o gás nitrogênio presente no ar." ,
        }

    }*/
    export default questao