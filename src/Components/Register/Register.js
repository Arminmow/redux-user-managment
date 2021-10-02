import React, {useState} from "react";
import {Link, Redirect} from "react-router-dom";
import {RegisterUser} from "../../Redux/Actions";
import {useDispatch, useSelector} from "react-redux";
import validate from '../../Modules/Validate'
import MyInput from "../../Shared-components/Myinput";

function Register() {

    const [nameFields, setNameFields] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    });
    const {firstName, lastName, email, password} = nameFields;

    const [formError, setFormError] = useState({
        firstNameErr: "",
        isFirstNameValid: false,
        lastNameErr: "",
        isLastNameValid: false,
        emailErr: "",
        isEmailValid: false,
        passwordErr: "",
        isPasswordValid: false
    });

    const isLogged = useSelector(state => state.userData.isLogged);
    const dispatch = useDispatch();

    function onChange(e) {
        setNameFields({
            ...nameFields,
            [e.target.name]: e.target.value
        })
        setFormError(validate(formError, e.target.name, e.target.value))
    }

    function handleRegister(e) {
        e.preventDefault()
        if (email.length === 0) {
            setFormError(prevState => {
                return {
                    ...prevState,
                    emailErr: "Email is required"
                }
            })
        }
        if (password.length === 0) {
            setFormError(prevState => {
                return {
                    ...prevState,
                    passwordErr: "Password is required"
                }
            })
        }
        if (firstName.length === 0) {
            setFormError(prevState => {
                return {
                    ...prevState,
                    firstNameErr: "First Name is required"
                }
            })
        }
        if (lastName.length === 0) {
            setFormError(prevState => {
                return {
                    ...prevState,
                    lastNameErr: "Last Name is required"
                }
            })
        }

        if (formError.isFirstNameValid && formError.isLastNameValid && formError.isEmailValid && formError.isPasswordValid) {
            dispatch(RegisterUser(firstName, lastName, email, password))
        }
    }

    return (
        <div className="wrapper">
            {isLogged && <Redirect to="/profile"/>}
            <div className="form-wrapper">
                <h1 className="registerHeader">Create Account</h1>
                <form className="myForm"  /* ref={form}*/  >
                    <div className="firstName">
                        <MyInput type="text" text="First Name" name="firstName" value={firstName}
                                 isValid={formError.firstNameErr.length > 0}
                                 errMsg={formError.firstNameErr} onChange={onChange}/>
                    </div>

                    <div className="lastName">
                        <MyInput type="text" text="Last Name" name="lastName" value={lastName}
                                 isValid={formError.lastNameErr.length > 0}
                                 errMsg={formError.lastNameErr} onChange={onChange}/>
                    </div>

                    <div className="email">
                        <MyInput type="email" text="Email" name="email" value={email}
                                 isValid={formError.emailErr.length > 0}
                                 errMsg={formError.emailErr} onChange={onChange}/>
                    </div>

                    <div className="password">
                        <MyInput type="password" text="Password" name="password" value={password}
                                 isValid={formError.passwordErr.length > 0}
                                 errMsg={formError.passwordErr} onChange={onChange}/>
                    </div>

                    <div className="createAccount ">
                        <button onClick={handleRegister}>Create Account</button>
                        <small>Already Have an Account?</small>
                        <Link style={{textDecoration: "none", fontSize: "13px"}} to="/login">Log in</Link>
                    </div>
                </form>
            </div>
        </div>
    )

}

export default Register;
