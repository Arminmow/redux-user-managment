import React from 'react';
import axios from "axios";
import {useEffect, useState} from "react";
import UserList_user from "./UserList_user";

function UsersList() {

    const [userDeleted , setUserDeleted] = useState(false);


    function deleteUser(e){
        console.log(e.target.id)
        if(window.confirm(`Are you sure you want to delete the user ${e.target.id} ?`)){
            axios.delete(`http://localhost:4000/users/${e.target.id}`, {
                params: {
                    id: e.target.id
                }
            })
                .then(res=> {
                    console.log(res)
                })
        }
        setUserDeleted(true)
    }



    const [list, setList] = useState([])
    useEffect(() => {
        console.log("aaaaaaaaaaaa")
        axios.get('http://localhost:4000/users')
            .then(res => {
                setList(res.data)
            });
        setUserDeleted(false)
    }, [userDeleted])

    return (
        <div>
            {list.map(user => (
                <UserList_user user={user} deleteUser={deleteUser}/>
            ))}
        </div>
    );
}

export default UsersList;
