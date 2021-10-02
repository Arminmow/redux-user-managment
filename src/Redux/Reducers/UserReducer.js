import {FETCH_USERS_REQUEST , FETCH_USERS_SUCCESS , FETCH_USERS_FAIL ,CLEAR_STORE} from "../Actions/Action_types";

const initialUserState = {
    loading   : false,
    user     : [],
    err       : '',
    isLogged: false
}

function UsersReducer(state = initialUserState, action) {
    switch (action.type) {
        case FETCH_USERS_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case FETCH_USERS_SUCCESS:
            return {
                loading: false,
                user: action.payload,
                err: "",
                isLogged: true
            }
        case FETCH_USERS_FAIL:
            return {
                loading: false,
                user: [],
                err: action.payload,
                isLogged: false
            }
        case CLEAR_STORE:
            return initialUserState

        default:
            return state
    }
}

export default UsersReducer;
