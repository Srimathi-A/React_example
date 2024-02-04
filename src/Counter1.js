import React,{useState} from 'react';

function Counter1(){
    const [count,setCount]=useState(0);
    const [name,setName]=useState('Divya')

    const handleClick=()=>{
        setCount(count+1);
        setName('Vignesh')
    }
    return (
        <div>
            <p>Count:{count}</p>
            <p>Name:{name}</p>
            <button onClick={handleClick}>Increment</button>
        </div>
    );
}
export default Counter1;