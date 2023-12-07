import { useEffect, useState } from "react";

const useOnline = () => {
    const [ isOnline, setIsOnline ] = useState(true);
    useEffect(()=>{
        const isOnline = ()=>{
            setIsOnline(true);
            console.log('online');
        }
        const isOffline = ()=>{
            setIsOnline(false);
            console.log('offline');
        }
        window.addEventListener('online',isOnline);
        window.addEventListener('offline', isOffline);
        // cleanup eventListener // seniour developer things
        return (()=>{
            window.removeEventListener('online',isOnline);
            window.removeEventListener('offline',isOffline);
        });
    },[]);
    return isOnline;
}

export default useOnline;