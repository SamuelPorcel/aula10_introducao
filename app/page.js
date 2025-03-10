'use client'

import { useState } from "react";
import "./home.css"
export default function Home() {

    const [carrinho, setCarrinho] = useState(0)

    function removeCarrinho(){
        if(carrinho >0){
            setCarrinho(carrinho - 1)
        } 
    }
    

    

    

    return (
        <div>
            <h1>Conradito Market</h1>
            <p> O melhor supermercado do bairro!</p>

            <hr/>
           
            <p className="carrinho">Itens no carrinho: {carrinho}</p>

            
            <button onClick={()=> setCarrinho(0)}>Limpar carrinho</button>

            <hr/>

            <h2>Produtos</h2>

            <div className="espaco">

                <div className="produto">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREt4aFvzTssx1kxkF7evtFi8tX6jC2DsrNWg&s" width="150px"/>
                    <p>Cenoura</p>
                    <p>R$ 4,50 (kg)</p>
                    <button onClick={()=> setCarrinho(carrinho+1)}>Comprar</button>
                    <button onClick={()=> removeCarrinho()}>Remover item</button>
                </div>

                <div className="produto">
                    <img src="https://superprix.vteximg.com.br/arquivos/ids/178620/Batata-Especial-1kg.png?v=636857520320030000" width="150px"/>
                    <p>Batata</p>
                    <p>R$ 2,00 (kg)</p>
                    <button onClick={()=> setCarrinho(carrinho+1)}>Comprar</button>
                    <button onClick={()=> removeCarrinho()}>Remover item</button>
                </div>

                <div className="produto">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdO73umJQjSRO2YVJ4Pk7tPjTRzGYc87bcpw&s" width="150px"/>
                    <p>tomate</p>
                    <p>R$ 7,00 (kg)</p>
                    <button onClick={()=> setCarrinho(carrinho+1)}>Comprar</button>
                    <button onClick={()=> removeCarrinho()}>Remover item</button>
                </div>

                <div className="produto">
                    <img src="https://s1.static.brasilescola.uol.com.br/be/2020/12/raiz-de-mandioca.jpg" width="200px"/>
                    <p>mandioca</p>
                    <p>R$ 9,00 (kg)</p>
                    <button onClick={()=> setCarrinho(carrinho+1)}>Comprar</button>
                    <button onClick={()=> removeCarrinho()}>Remover item</button>
                </div>

            </div>

        </div>
    );
}

