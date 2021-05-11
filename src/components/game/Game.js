/* eslint-disable no-unreachable */
import React,{useState} from "react";
import "./Game.css";
import Button from "./Gameinput";


// let arr=["😊","😂","✋","👌","😒","✌","😜"];
let arr=["😊","😂","✋"];
let result= null;
// let [a,b,c]=[null,null,null];
const Gameemoji= () =>{
    const [count,setcount] = useState({
        a:arr[Math.floor(Math.random()*arr.length)],
        b:arr[Math.floor(Math.random()*arr.length)],
        c:arr[Math.floor(Math.random()*arr.length)]
    })
    const reload = () => {
        setcount({
            a:arr[Math.floor(Math.random()*arr.length)],
            b:arr[Math.floor(Math.random()*arr.length)],
            c:arr[Math.floor(Math.random()*arr.length)]
        })
    }
    // console.log(count);
        // let a=arr[Math.floor(Math.random()*arr.length)];
        // let b=arr[Math.floor(Math.random()*arr.length)];
        // let c=arr[Math.floor(Math.random()*arr.length)];
    // console.log(count.a);
    // console.log(count.b);
    // console.log(count.c);
    if((count.a===count.b) && (count.b===count.c)){  
        result = <div className="game">
            <h1>{count.a}{count.b}{count.c}</h1>
            <hr/>
            <h1>You Win</h1>
            <hr/>
        </div>;
    }else{
        result = <div className="game">
            <h1>{count.a}{count.b}{count.c}</h1>
            <hr/>
            <h1>You Lost</h1>
            <hr/>
        </div>;
    }
    return <div>
         {result}
         <Button change={reload}/>
         </div>        
    }




export default Gameemoji;