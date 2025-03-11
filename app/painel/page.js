'use client'

import "./painel.css"
import { useState } from "react";

function Painel () {
    
    const [user, setuser] = useState("")
    const [password, setpassword] = useState("")
    
    const [showerror, setshowerror] = useState(false)

    const [showsucess, setshowsucess] = useState(false)

    function login(){
        if(user == "Samuel" && password == "123"){
             setshowsucess(true)
             setshowerror(false)
            
        }else if(user =="" && password == ""){
            setshowerror(false)
            setshowsucess(false)

        }else{setshowerror(true)
            setshowsucess(false)
        return
        }
    }
     


    
    
    
    return ( 
            <div>
                <h1>Painel administrativo</h1>

                <label>
                    Digite o usuário:
                    <input onChange={(e)=>setuser(e.target.value)}/>
                </label>

                <br/>

                <label>
                    Digite a senha:
                    <input onChange={(e)=>setpassword(e.target.value)}/>
                </label>

                <br/>

                <button onClick={()=>login()}>Entrar</button>

                {/* OPERADOR TERNÁRIO */}

                {
                    showerror == true ? 
                        <div className="erro">
                            <p>Usuário ou senha incorretos</p>
                        </div>
                    :  
                        <div></div>
                }

                {
                    showsucess == true ?
                        <div className="sucesso">
                            <p>Login realizado com sucesso</p>
                        </div>
                    :
                        <div></div>
                }


            </div>
    );

}

export default Painel ;