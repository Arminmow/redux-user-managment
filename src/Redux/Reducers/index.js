import {combineReducers} from "redux";
import LoggReducer from "./LogReducer";
import UserReducer from "./UserReducer";

const rootReducer = combineReducers({
    userData: UserReducer
})

export default rootReducer;
