'use client'
import { useState } from "react"
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';



export default function Contato(){
    
    const [name, setName] = useState("")
    const [message, setMessage] = useState("")
    const notifySucess = () => toast('Mensagem enviada com sucesso!',{
        position: "top-center",
        autoClose: 5000,
        theme: "light"
    });
    const notifyError = ()=> toast('Por favor, preencha todos os campos',{
        position: "top-center",
        autoClose: 5000,
        theme: "light"
    });

    function sendMessage(e){

        e.preventDefault()

        if(name == "" || message == ""){
            
        }else{
           
        }
    }


    
    return(
        <div>
            <div className="grid place-items-center h-dvh bg-zinc-900/15">

        <h1>Página de contato</h1>
        <p>Entre em contato conosco</p>

        <hr/>

        <form onSubmit={(e)=>sendMessage(e)}>
            <label>
                Digite seu nome:
                <input onChange={(e)=> setName(e.target.value)}/>
            </label>

            <br/>

            <label>
                Digite sua mensagem:
                <input onChange={(e)=> setMessage(e.target.value)}/>
            </label>

            <br/>

            <button>Enviar</button>


        </form>





        </div> 
    </div>
    )
}
