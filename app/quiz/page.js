'use client'

import "./quiz.css"

import { useState } from "react";

function Quiz() {

    const [p1, setp1] = useState(0)

    const [p2, setp2] = useState(0)

    const [p3, setp3] = useState(0)

    const [p4, setp4] = useState("")

    const [total, setTotal] = useState(0)

    const [selecionado, setSelecionado] = useState(["","","",""])

    function calculaTotal(){
            if(p4 == "Naruto"){
                setTotal(p1+p2+p3+1)
            }else {
                setTotal(p1+p2+p3)
            }    
        }
    
    return ( 
        <div>

            <h1>Quiz Conradito</h1>
            <p>Assina-le a opção correta</p>

            <hr/>

            <h2>Qual a cor do cavalo branco de Napoleão?</h2>
            <label> <input name="p1" type="radio" onChange={()=> setp1(0)}/> Preto</label>
            <br/>
            <label> <input name="p1" type="radio" onChange={()=> setp1(0)}/> Azul</label>
            <br/>
            <label> <input name="p1" type="radio" onChange={()=> setp1(0)}/> Branco</label>
            <br/>
            <label> <input name="p1" type="radio" onChange={()=> setp1(1)}/> Transparente</label>

            <hr/>

            <h2>Qual a melhor letra?</h2>
            <label> <input name="p2" type="radio" onChange={()=> setp2(1)}/> A</label>
            <br/>
            <label> <input name="p2" type="radio" onChange={()=> setp2(0)}/> B</label>
            <br/>
            <label> <input name="p2" type="radio" onChange={()=> setp2(0)}/> C</label>
            <br/>
            <label> <input name="p2" type="radio" onChange={()=> setp2(0)}/> X</label>

            <hr/>

            <h2>Quanto é dois + 2?</h2>
            <ul className="lista">
                <p name="p3" className={selecionado[0]} onClick={()=> { setp3(0); setSelecionado(["selecionado","","",""])} }>2</p>
                <p name="p3" className={selecionado[1]} onClick={()=> { setp3(0); setSelecionado(["","selecionado","",""])} }>0</p>
                <p name="p3" className={selecionado[2]} onClick={()=> { setp3(0); setSelecionado(["","","selecionado",""])} }>aaaaa</p>
                <p name="p3" className={selecionado[3]} onClick={()=> { setp3(1); setSelecionado(["","","","selecionado"])} }>sim</p>
            </ul>

            <h2>Qual é o melhor anime do mundo?</h2>
            <input onChange={(e)=> setp4(e.target.value)}/>


            <button onClick={()=> calculaTotal() } >Enviar Respostas</button>

            <p>Total de pontos: {total} </p>

        </div>
     );
}

export default Quiz;

