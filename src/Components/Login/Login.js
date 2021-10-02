import {FetchUser} from "../../Redux/Actions";
import {useState} from "react";
import {Link} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import {Redirect} from "react-router-dom"
import MyInput from "../../Shared-components/Myinput";

function Login() {

    const [loginInfo , setLoginInfo] = useState({
        email: "",
        password: ""
    });
    const {email , password} = loginInfo

    const userData = useSelector(state => state.userData)
    const dispatch = useDispatch();

    function change(e){
        setLoginInfo({
            ...loginInfo,
            [e.target.name] : e.target.value
        })
    }

    function handleLogin(e) {
        e.preventDefault();
        dispatch(FetchUser(document.getElementById('email').value, document.getElementById('password').value));
    }

    return (
        <div className="wrapper">
           
            {userData.isLogged && <Redirect to="/profile"/>}
            <div className="form-wrapper">
                <h1 className="registerHeader">Login</h1>
                <form className="myForm"  /* ref={form}*/  >

                    <div className="email">
                        <MyInput type="email" text="Email" name="email" value={email} onChange={change}/>
                    </div>

                    <div className="password">
                        <MyInput type="password" text="Password" name="password" value={password} onChange={change}/>
                    </div>
                    {userData.err && (
                        <div style={{backgroundColor:"#edebe6", width:"100%", padding:"10px 20px"}}>
                            <i className="bi bi-exclamation-lg" style={{color:"red"}}/>
                            <span style={{color:"red"}}>{userData.err}</span>
                        </div>
                    )}
                    <div className="createAccount ">
                        <button onClick={handleLogin}>Login</button>
                        <small>Don't Have an Account? </small>
                        <Link style={{textDecoration:"none" , fontSize:"13px"}} to="/register">Create an account</Link>
                    </div>
                </form>
            </div>
        </div>
    )

}

export default Login
