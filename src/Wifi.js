import {useState,useEffect}from 'react';
import './style.css';

function Wifi(){
    //online state
    const [isOnline,setIsOnline]=useState(navigator.online);

    useEffect(()=>{
        //update network  status
        const handleStatusChange = ()=>{
            setIsOnline(navigator.online);
        };
        //listen to the online status
        window.addEventListener('online',handleStatusChange);

        //listen to the offline status
        window.addEventListener('offline',handleStatusChange);
        //specify hoe to clean up after this effect for performance improvment
        return ()=>{
            window.removeEventListener('online',handleStatusChange);
            window.removeEventListener('offline',handleStatusChange);
        };
    },[isOnline]);
    return (
        <div className='container'>
            <h3>Welcome to imarticus.org</h3>
            <p>Turn on/off your wi-fi to see what happens</p>
            {isOnline?(
                <h1 className="online" >You are online</h1>
            ):(
                <h1 className="offline" >You are offline</h1> 
            )}
        </div>
    );
}
export default Wifi;