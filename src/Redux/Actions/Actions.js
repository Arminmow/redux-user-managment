import {FETCH_USERS_FAIL, FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, LOGGED_IN, LOGGED_OUT ,CLEAR_STORE} from "./Action_types";
import axios from "axios";

export function Logged_in() {
    return {
        type: LOGGED_IN
    }
}

export function Logged_out() {
    return {
        type: LOGGED_OUT
    }
}

export function FetchUsersRequest() {
    return {
        type: FETCH_USERS_REQUEST
    }
}

export function FetchUsersSuccess(user) {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: user
    }
}

export function FetchUsersFail(err) {
    return {
        type: FETCH_USERS_FAIL,
        payload: err
    }
}

export function Clear(){
    return {
        type: CLEAR_STORE
    }
}


export function FetchUser(email, password) {
    return function (dispatch) {
        dispatch(FetchUsersRequest());
        axios.get(`http://${window.location.hostname}:4000/users?email=${email}&password=${password}`)
            .then(res => {
                const user = res.data[0];
                console.log(user)
                if(user){
                    localStorage.setItem("armin_testPack_user_id" , JSON.stringify(user.id))
                    dispatch(FetchUsersSuccess(user));
                }else {
                    console.log("user not found")
                    dispatch(FetchUsersFail("User Not Found"));
                }


            })
            .catch(err => {
                const errorMsg = err.message;
                console.log(err)
                dispatch(FetchUsersFail(errorMsg));
            })

    }
}

export function FetchByCookie(id){
    return function (dispatch){
        dispatch(FetchUsersRequest());
        axios.get(`http://${window.location.hostname}:4000/users?id=${id}`)
            .then(res => {
                const user = res.data[0]
                dispatch(FetchUsersSuccess(user))
            })
    }
}

export function ClearStore(){
    return function (dispatch){
        dispatch(Clear())
    }
}

export function UpdateUser(userInfo) {
    return function (dispatch) {
        axios.patch(`http://${window.location.hostname}:4000/users/${userInfo.id}`, {
            id: userInfo.id,
            firstName: userInfo.firstName,
            lastName: userInfo.lastName,
            email: userInfo.email,
            password: userInfo.password,
            phone: userInfo.phone,
            address: userInfo.address,
            img: userInfo.img,
            job: userInfo.job,
            website: userInfo.website,
            github: userInfo.github,
            instagram: userInfo.instagram,
            facebook: userInfo.facebook
        })
            .then(res => {
                console.log(res.data)
                const user = res.data
                dispatch(FetchUsersSuccess(user));
            })
    }
}

export function RegisterUser(firstName , lastName ,email , password){
    return function (dispatch){
        dispatch(FetchUsersRequest());
        axios.post(`http://${window.location.hostname}:4000/users`, {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
            phone: "",
            address: "",
            isAdmin: false
        })
            .then(res =>{
                const user = res.data
                localStorage.setItem("armin_testPack_user_id" , JSON.stringify(user.id))
                dispatch(FetchUsersSuccess(user))
            })
    }
}

