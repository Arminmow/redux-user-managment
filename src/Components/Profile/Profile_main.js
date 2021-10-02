import React from 'react';
import Profile from "./Profile";
import {useSelector } from "react-redux";
import {Redirect} from "react-router-dom";


function ProfileMain() {



    const isLogged = useSelector(state => state.userData.isLogged)

    return (
        <>
            {isLogged ? <Profile/> : <Redirect to="login"/>}
        </>


    );
}

export default ProfileMain;
