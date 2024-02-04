import React from 'react';
import {useState}from 'react';

export default function Timer1(){
    const [seconds,setSeconds]=useState(0)

    const startTimer= () =>{
        setInterval(()=>{
            setSeconds(seconds=>seconds+1)
        },1000)
    }

    const stopTimer =()=>{
        clearInterval(setSeconds(0)) //for reset the couter
        document.querySelector('#counter').remove() //remove the couter element
    }
    return (
        <div className="counter-container">
        <button className="start-button"onClick={startTimer}>Start</button>
        <button className="stop-button" onClick={stopTimer}>Stop</button>
        <p id="counter">{seconds}</p>
        </div>

    )
}