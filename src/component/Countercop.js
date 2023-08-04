import React from 'react'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import  {faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';

export default function Countercop(props) {
    const[counter ,setCounter]=useState(20);
    const[color, setColor]=useState("black");
    const[color1, setColor1]=useState("black");
    const like=() =>{
        if(color=="black" && color1=="black"){
            setColor("green");
            setCounter(counter+1);
       
        }
        else if(color1=="red"){
            setCounter(counter+1);
            setColor("green");
            setColor1("black");
        }
        else{
            setCounter(counter-1);
            setColor("black");
        }
    }
    const dislike=() =>{
        if(color=="black" && color1=="black"){
            setColor1("red");
            alert("we will send your feedback to creator")
        }
        else if(color=="green"){
            setCounter(counter-1);
            setColor("black");
            setColor1("red");
        }
        else if(color1=="red"){
            setColor1("black");
        }
        else{
            setColor1("black");

        }
        
    }

  return (
    <div>
        <h1>Counter:{counter}</h1>
       
        <br />
        <button onClick={like}><FontAwesomeIcon icon={faThumbsUp} color={color}/></button>
        <button onClick={dislike}><FontAwesomeIcon icon={faThumbsDown} color={color1} /></button>
    </div>
  )
}
