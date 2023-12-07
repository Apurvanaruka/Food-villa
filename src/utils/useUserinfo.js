import {useState , useEffect} from 'react';
import { GITHUB_API_URL } from '../contants';
import { GITHUB_JSON } from "../contants";


const useUserinfo = () => {

    const [userInfo, setUserInfo] = useState();

    async function getUserInfo(){
        // const response = await fetch(GITHUB_API_URL);
        // const json = await response.json();
        const json = GITHUB_JSON;
        setUserInfo(json);
        return json;
    }
    
    useEffect(() => {
        const json = getUserInfo();
    },[]);

    return userInfo;
}

export default useUserinfo;