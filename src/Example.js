import { useState,useEffect } from "react";

function Timer(){
    const[count,setCount] =useState(1);

    useEffect(() => {
       /* setTimeout(() =>{
            setCount((count) => count + 1);
        },1000);
    });*/
        count<5 && setTimeout(()=> setCount(count+1),1000);
    },[count]);

    return<h1>I have rendered {count}times!</h1>
}
export default Timer;