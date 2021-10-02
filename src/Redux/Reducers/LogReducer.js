import {Logged_in, Logged_out} from "../Actions";

const initialLoggedState = {
    isLogged: false
}

function LogReducer(state = initialLoggedState, action) {
    switch (action.type) {
        case Logged_in:
            return {
                isLogged: true
            }
        case Logged_out:
            return {
                isLogged: false
            }
        default:
            return state
    }
}

export default LogReducer;
