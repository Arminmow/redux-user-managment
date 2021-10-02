import React from 'react';
import {useSelector} from "react-redux";
import axios from "axios";

function UserListUser({user , deleteUser}) {

    const userData = useSelector(state => state.userData)


    return (
        <div>
            <div key={user.id} className="row">
                <div className="col-sm-3">
                    <h6 className="mb-0">{user.firstName} {user.lastName}</h6>
                </div>
                <div className="col-sm-9 text-secondary">
                    {user.job ? user.job : <span style={{color: "red"}}>Not Set</span>}
                    {userData.user.isAdmin && user.id !==1 && (
                        <i id={user.id} style={{color:"red" , float:"right" , cursor:"pointer"}} className="bi bi-trash-fill" onClick={deleteUser }/>
                    )}
                </div>

            </div>

            <hr/>
        </div>
    );
}

export default UserListUser;
