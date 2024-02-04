import React,{useState} from'react';

function Component(){
    const [user,setUser]=useState("Jesse Mall");
    return (
        <>
        <h1>{`Hello ${user}`}</h1>
        <Component1 user={user}/>
        </>
    );
}
function Component1({user}) {
    return (
        <>
        <h1>Component1</h1>
        <Component2 user={user}/>
        </>
    );
}
function Component2({user}) {
    return (
        <>
        <h1>Component2</h1>
        <Component3 user={user}/>
        </>
    );
}
function Component3({user}) {
    return (
        <>
        <h1>Component3</h1>
        <Component4 user={user}/>
        </>
    );
}
function Component4({user}) {
    return (
        <>
        <h1>Component4</h1>
        <Component5 user={user}/>
        </>
    );
}
function Component5({user}) {
    return (
        <>
        <h1>Component5</h1>
        <h2>{`Hello ${user} again!`}</h2>
        </>
    );
}
export default Component;