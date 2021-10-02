import Home from "./Components/Home/Home";
import Register from "./Components/Register/Register";
import Login from "./Components/Login/Login";
import Profile_main from "./Components/Profile/Profile_main";
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import {useEffect} from "react";
import {FetchByCookie} from "./Redux/Actions";
import {useDispatch ,useSelector} from "react-redux";
import {BrowserRouter, Route, Switch, Link} from "react-router-dom";
import {ClearStore} from "./Redux/Actions/Actions";


function App() {

    useEffect(()=> {
        const myId = localStorage.getItem('armin_testPack_user_id');
        console.log(myId)
        if (myId != null || myId != undefined){
            dispatch(FetchByCookie(myId))
        }
        console.log(myId)
    }, [])

    const dispatch = useDispatch()
    const isLogged = useSelector(state => state.userData.isLogged)

    return (
        <BrowserRouter>
            <div>
                <nav className="navbar navbar-expand navbar-dark bg-dark">
                    <Link to="/" className="navbar-brand">
                        Armin Mow
                    </Link>
                    <div className="navbar-nav ms-auto me-4">
                        {!isLogged ? (
                            <>
                                <li className="nav-item">
                                    <Link to="/register" className="nav-link btn-primary btn" style={{color: "white"}}>
                                        Register
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/login" className="nav-link btn btn-primary" style={{color: "white" , marginLeft:"10px"}}>
                                        Login
                                    </Link>


                                </li>
                            </>
                        ) : (<button className="btn btn-danger" onClick={()=> {
                            localStorage.removeItem("armin_testPack_user_id")
                            dispatch(ClearStore())
                        }}>Log Out</button>)}


                    </div>
                </nav>

                <Switch>
                    <Route exact path="/register"><Register/></Route>
                    <Route exact path="/login"><Login/></Route>
                    <Route exact path="/"><Home/></Route>
                    <Route exact path="/profile"><Profile_main /></Route>
                </Switch>

            </div>
        </BrowserRouter>

    );
}

export default App;
