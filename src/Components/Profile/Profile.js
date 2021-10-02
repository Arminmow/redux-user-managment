import {useSelector, useDispatch} from "react-redux";
import {Redirect} from "react-router-dom";
import {useState } from "react";
import {UpdateUser} from "../../Redux/Actions";
import UsersList from "../Users-list/UsersList";
import './Profile.css'


function Profile() {

    const [editing, setEditing] = useState(false);
    const dispatch = useDispatch()
    const userData = useSelector(state => state.userData)
    const isLogged = userData.isLogged
    const [userInfo, setUserInfo] = useState({
        id: userData.user.id,
        firstName: userData.user.firstName,
        lastName: userData.user.lastName,
        password: userData.user.password ,
        email: userData.user.email,
        phone: userData.user.phone,
        address: userData.user.address,
        img: userData.user.img,
        job: userData.user.job,
        website: userData.user.website,
        github: userData.user.github,
        instagram: userData.user.instagram,
        facebook: userData.user.facebook,
        isAdmin: userData.user.isAdmin
    })

    function onChange(e) {
        setUserInfo({
            ...userInfo,
            [e.target.name]: e.target.value
        })
    }

    function Change() {
        dispatch(UpdateUser( userInfo));
        setEditing(false)
    }

    return (
        <div className="wrapper">
            {!isLogged && <Redirect to="/login"/>}
            <div style={{margin: "50px 0px"}}  className="container profile-content">
                <div className="main-body">
                    <div className="row gutters-sm">
                        <div className="col-md-4 mb-3">
                            <div className="card">
                                <div className="card-body">
                                    <div className="d-flex flex-column align-items-center text-center">
                                        <img
                                            alt="profile-img"
                                            src={userData.user.img ? userData.user.img : "https://t3.ftcdn.net/jpg/01/87/10/40/240_F_187104027_8i2JbFDBB5jB7R65Ce464yRs4gfNbR3Z.jpg"}
                                            width="230px" height="230px" style={{borderRadius: "50%"}}/>
                                        <div className="mt-3">
                                            {editing && (<div>
                                                <span>Upload picture URL</span>
                                                <i className="bi bi-info-circle-fill bs-tooltip-top myTooltip " style={{marginLeft: "5px" ,color:"blue"}}>
                                                    <span className="myTooltipText">
                                                        Please visit <a href="https://imgbb.com/">https://imgbb.com</a> <br/>
                                                         and upload your image to get the URL
                                                    </span>
                                                </i>
                                                <br/>

                                                <input type="text" placeholder="visit https://imgbb.com/" name="img"
                                                       onChange={onChange}/>
                                            </div>)}
                                            <h4>{userData.user.firstName}</h4>

                                            {userInfo.isAdmin && <span className="badge bg-danger">Admin</span>}
                                            <p className="text-secondary mb-1">{userData.user.job}</p>
                                            <p className="text-muted font-size-sm">{userData.user.address}</p>

                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="card mt-3">
                                <ul className="list-group list-group-flush">

                                    {/* ------------------------------------ Website-------------------------------- */}
                                    {editing ? (
                                        <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                            <h6 className="mb-0">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                     viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                     className="feather feather-globe mr-2 icon-inline">
                                                    <circle cx="12" cy="12" r="10"> </circle>
                                                    <line x1="2" y1="12" x2="22" y2="12"> </line>
                                                    <path
                                                        d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"> </path>
                                                </svg>
                                                <span style={{fontSize:"15px"}}>Website</span>
                                            </h6>
                                            <div className="col-sm-9 text-secondary">

                                                http://
                                                <input type="text" className="form-control" name="website"
                                                       onChange={onChange} placeholder={userData.user.website}/>
                                                {/*<button name="website" style={{float:"right" , marginTop: "10px"}} className="btn btn-danger" onClick={Delete}><i className="bi bi-trash"> </i></button>*/}
                                            </div>
                                        </li>
                                    ) : userData.user.website && (
                                        <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                            <h6 className="mb-0">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                     viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                     className="feather feather-globe mr-2 icon-inline">
                                                    <circle cx="12" cy="12" r="10"> </circle>
                                                    <line x1="2" y1="12" x2="22" y2="12"> </line>
                                                    <path
                                                        d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"> </path>
                                                </svg>
                                                Website
                                            </h6>
                                            <a href={"http://" + userInfo.website} target="_blank" className="text-secondary">{userInfo.website}</a>
                                        </li>
                                    )}
                                    {/* --------------------------------- Website END------------------------------- */}

                                    {/* ------------------------------------ GitHUB -------------------------------- */}
                                    {editing ? (
                                        <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                            <h6 className="mb-0">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                     viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                     className="feather feather-github mr-2 icon-inline">
                                                    <path
                                                        d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"> </path>
                                                </svg>
                                                <span style={{fontSize:"15px"}}>Github</span>
                                            </h6>
                                            <div className="col-sm-9 text-secondary">
                                                http://
                                                <input type="text" className="form-control" name="github"
                                                       onChange={onChange} placeholder={userData.user.github}/>
                                               {/* <button name="website" style={{float:"right" , marginTop: "10px"}} className="btn btn-danger" onClick={Delete}><i className="bi bi-trash"> </i></button>*/}
                                            </div>
                                        </li>
                                    ) : userData.user.github && (
                                        <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                            <h6 className="mb-0">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                     viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                     className="feather feather-github mr-2 icon-inline">
                                                    <path
                                                        d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"> </path>
                                                </svg>
                                                Github
                                            </h6>
                                            <a href={"http://" + userInfo.github} target="_blank" className="text-secondary">{userInfo.github}</a>
                                        </li>
                                    )}
                                    {/* ---------------------------------- GitHUB END ------------------------------ */}

                                    {/* ---------------------------------- INSTAGRAM ------------------------------ */}

                                    {editing ? (
                                        <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                            <h6 className="mb-0">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                     viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                     className="feather feather-instagram mr-2 icon-inline text-danger">
                                                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"> </rect>
                                                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"> </path>
                                                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"> </line>
                                                </svg>
                                                <span style={{fontSize:"15px"}}>Instagram</span>
                                            </h6>
                                            <div className="col-sm-9 text-secondary">
                                                https://www.instagram.com
                                                <input type="text" className="form-control" name="instagram"
                                                       onChange={onChange} placeholder={userData.user.instagram}/>
                                                {/*<button name="website" style={{float:"right" , marginTop: "10px"}} className="btn btn-danger" onClick={Delete}><i className="bi bi-trash"> </i></button>*/}
                                            </div>
                                        </li>
                                    ) : userData.user.instagram && (
                                        <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                            <h6 className="mb-0">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                     viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                     className="feather feather-instagram mr-2 icon-inline text-danger">
                                                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"> </rect>
                                                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"> </path>
                                                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"> </line>
                                                </svg>
                                                Instagram
                                            </h6>
                                            <a href={"https://www.instagram.com/" + userInfo.instagram} target="_blank" className="text-secondary">{userInfo.instagram}</a>
                                        </li>
                                    )}
                                    {/* ---------------------------------- INSTAGRAM END ------------------------------ */}

                                    {/* ---------------------------------- FACEBOOK ------------------------------ */}
                                    {editing ? (
                                        <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                            <h6 className="mb-0">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                     viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                     className="feather feather-facebook mr-2 icon-inline text-primary">
                                                    <path
                                                        d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"> </path>
                                                </svg>
                                                <span style={{fontSize:"15px"}}>Facebook</span>
                                            </h6>
                                            <div className="col-sm-9 text-secondary">
                                                <input type="text" className="form-control" name="facebook"
                                                       onChange={onChange} placeholder={userData.user.facebook}/>
                                                {/*<button name="website" style={{float:"right" , marginTop: "10px"}} className="btn btn-danger" onClick={Delete}><i className="bi bi-trash"> </i></button>*/}
                                            </div>
                                        </li>
                                    ) : userData.user.facebook && (
                                        <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                            <h6 className="mb-0">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                     viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                     className="feather feather-facebook mr-2 icon-inline text-primary">
                                                    <path
                                                        d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"> </path>
                                                </svg>
                                                Facebook
                                            </h6>
                                            <a href={userInfo.facebook} className="text-secondary">{userInfo.facebook}</a>
                                        </li>
                                    )}
                                    {/* --------------------------------- FACEBOOK END ----------------------------- */}


                                </ul>
                            </div>
                        </div>

                        <div className="col-md-8">
                            <div className="card mb-3">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">Full Name</h6>
                                        </div>
                                        {editing ? (<div className="col-sm-9 text-secondary">
                                            <input type="text" className="form-control" name="firstName"
                                                   onChange={onChange} placeholder={userData.user.firstName}/>
                                        </div>) : (<div className="col-sm-9 text-secondary">
                                            {userData.user.firstName}
                                        </div>)}

                                    </div>
                                    <hr/>

                                    {editing && (
                                        <>
                                            <div className="row">
                                                <div className="col-sm-3">
                                                    <h6 className="mb-0">Job title</h6>
                                                </div>
                                                {editing && (<div className="col-sm-9 text-secondary">
                                                    <input type="text" className="form-control" name="job"
                                                           onChange={onChange} placeholder={userData.user.job}/>
                                                </div>)}
                                            </div>
                                            <hr/>
                                        </>
                                    )}

                                    <div className="row">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">Email</h6>
                                        </div>
                                        {editing ? (<div className="col-sm-9 text-secondary">
                                            <input type="text" className="form-control" name="email"
                                                   onChange={onChange} placeholder={userData.user.email}/>
                                        </div>) : (<div className="col-sm-9 text-secondary">
                                            {userData.user.email}
                                        </div>)}
                                    </div>
                                    <hr/>


                                    <div className="row">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">Phone</h6>
                                        </div>
                                        {editing ? (<div className="col-sm-9 text-secondary">
                                            <input type="text" className="form-control" name="phone"
                                                   onChange={onChange} placeholder={userData.user.phone}/>
                                        </div>) : (<div className="col-sm-9 text-secondary">
                                            {userData.user.phone}
                                        </div>)}
                                    </div>
                                    <hr/>
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">Address</h6>
                                        </div>
                                        {editing ? (<div className="col-sm-9 text-secondary">
                                            <input type="text" className="form-control" name="address"
                                                   onChange={onChange} placeholder={userData.user.address}/>
                                        </div>) : (<div className="col-sm-9 text-secondary">
                                            {userData.user.address}
                                        </div>)}
                                    </div>
                                    <hr/>

                                    <div className="row">
                                        <div className="col-sm-12">
                                            {editing ?
                                                (<div>
                                                    <button className="btn btn-primary px-4" onClick={Change}>Save
                                                        Changes
                                                    </button>
                                                    <button className="btn btn-danger px-4"
                                                            onClick={() => setEditing(false)}>Cancel
                                                    </button>
                                                </div>) :
                                                <button className="btn btn-primary px-4"
                                                        onClick={() => setEditing(true)}>Edit</button>

                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="card">
                                        <div className="card-body">
                                            <h1>Users List</h1><br/>
                                            <UsersList/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )

}

export default Profile;
