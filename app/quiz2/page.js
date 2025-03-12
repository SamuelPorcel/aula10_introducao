'use client'

import "./quiz.css"

import { useState } from "react";

function Quiz2() {

    const [p1, setp1] = useState(0)
    const [p2, setp2] = useState(0)
    const [p3, setp3] = useState(0)
    const [p4, setp4] = useState(0)

    const [total, setTotal] = useState(0)

    const [showp1, setshowp1] = useState(true)
    const [showp2, setshowp2] = useState(false)
    const [showp3, setshowp3] = useState(false)
    const [showp4, setshowp4] = useState(false)

    function calculaTotal(){
        
        let totalAtualizado = 0

        totalAtualizado = p1+p2+p3+p4
        setTotal(totalAtualizado)
        
        // Pega do banco e converte em número
        let valorDoBanco = parseInt( localStorage.getItem("total"))

        // Soma valores do banco
        localStorage.setItem("total", totalAtualizado + valorDoBanco )

    }

    
    return ( 
        <div>

            <h1>Quiz Conradito</h1>
            <p>Assina-le a opção correta</p>

            <hr/>

                    {/*Quando for usar só o se*/}
            {                
                showp1 == true && 
                    <div>
                        <h2>Qual a cor do cavalo branco de Napoleão?</h2>
                        <label> <input name="p1" type="radio" onChange={()=>{ setp1(0); setshowp2(true); setshowp1(false)}}/> Preto</label>
                        <br/>
                        <label> <input name="p1" type="radio" onChange={()=> { setp1(0); setshowp2(true); setshowp1(false)}}/> Azul</label>
                        <br/>
                        <label> <input name="p1" type="radio" onChange={()=> { setp1(0); setshowp2(true); setshowp1(false)}}/> Branco</label>
                        <br/>
                        <label> <input name="p1" type="radio" onChange={()=> { setp1(1); setshowp2(true); setshowp1(false)}}/> Transparente</label>
                    </div>
            }


            {   showp2 == true &&
                    <div>
                        <h2>Qual a melhor letra?</h2>
                        <label> <input name="p2" type="radio" onChange={()=>{ setp2(1); setshowp3(true); setshowp2(false)}}/> A</label>
                        <br/>
                        <label> <input name="p2" type="radio" onChange={()=>{ setp2(0); setshowp3(true); setshowp2(false)}}/> B</label>
                        <br/>
                        <label> <input name="p2" type="radio" onChange={()=>{ setp2(0); setshowp3(true); setshowp2(false)}}/> C</label>
                        <br/>
                        <label> <input name="p2" type="radio" onChange={()=>{ setp2(0); setshowp3(true); setshowp2(false)}}/> X</label>
                    </div>               
            }


            {   showp3 == true &&
                    <div>
                        <h2>Quanto é dois + 2?</h2>
                        <label> <input name="p3" type="radio" onChange={()=>{ setp3(0); setshowp4(true); setshowp3(false)}}/> 2</label>
                        <br/>
                        <label> <input name="p3" type="radio" onChange={()=>{ setp3(0); setshowp4(true); setshowp3(false)}}/> aaaaa</label>
                        <br/>
                        <label> <input name="p3" type="radio" onChange={()=>{ setp3(1); setshowp4(true); setshowp3(false)}}/> sim</label>
                        <br/>
                        <label> <input name="p3" type="radio" onChange={()=>{ setp3(0); setshowp4(true); setshowp3(false)}}/> 4</label>
                    </div>               
            }

            {   showp4 == true &&
                    <div>
                        <h2>nomes?</h2>
                        <label> <input name="p4" type="radio" onChange={()=>{ setp4(0); setshowp4(false)}}/> sfaw</label>
                        <br/>
                        <label> <input name="p4" type="radio" onChange={()=>{ setp4(0); setshowp4(false)}}/> aba</label>
                        <br/>
                        <label> <input name="p4" type="radio" onChange={()=>{ setp4(1); setshowp4(false)}}/> samuel</label>
                        <br/>
                        <label> <input name="p4" type="radio" onChange={()=>{ setp4(0); setshowp4(false)}}/> sim</label>
                    </div>               
            }


            <hr/>


            <button onClick={()=> calculaTotal() } >Enviar Respostas</button>

            <p>Total de pontos: {total} </p>

        </div>
     );
}

export default Quiz2;

