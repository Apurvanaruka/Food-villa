import {useState , useEffect} from 'react';
// import { getUserInfo } from './helper';
import { GITHUB_API_URL } from '../contants';


const useUserinfo = () => {

    const [userInfo, setUserInfo] = useState();

    async function getUserInfo(){
        const response = await fetch(GITHUB_API_URL);
        const json = await response.json();
        setUserInfo(json);
        return json;
    }
    
    useEffect(() => {
        const json = getUserInfo();
        // setUserInfo(json);
    },[]);

    return userInfo;
}

export default useUserinfo;