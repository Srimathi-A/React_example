import {useState,useEffect,useRef}from "react";

function Useref1() {
    const inputElement=useRef();
    const focusInput =()=>{
        inputElement.current.foucs();
    };

   
    return(
        <>
        <input type="text" ref={inputElement}/>
        <button onclick={focusInput}>Focus Input</button>
        </>
    );
}
export default Useref1;