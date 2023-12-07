import React, { useState, useEffect } from "react";
import useUserinfo from "../utils/useUserinfo";


const Profile = () => {

    const userInfo  = useUserinfo();
    return (
        <div>
            <h1>{userInfo?.message}</h1>
            {console.log('render')}
            <h2>{userInfo?.name}</h2>
            <img src={userInfo?.avatar_url} alt="" />
            <h3>{userInfo?.bio}</h3>
            <h3>Follwers {userInfo?.followers}  Following {userInfo?.following}</h3>
            <h2>Location :-  {userInfo?.location}</h2>
            <h2>Company :- {userInfo?.company}</h2>
        </div>
    );
}

export default Profile;