import{
    REGISTER_USER_SUCCESS,
    REGISTER_USER_REQUEST,
    REGISTER_USER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_REQUEST,
    CLEAR_ERRORS,
    LOAD_USER_REQUEST,
    LOAD_USER_SUCCESS,
    LOGIN_FAIL,
    LOAD_USER_FAIL,
    LOGOUT_SUCCESS,
    LOGOUT_FAIL
} from '../Constant/UserConstant'

export const userRegisterReducer = (state = {user: {}}, action) => {
    switch (action.type){
        case REGISTER_USER_REQUEST:
        case LOGIN_REQUEST:
        case LOAD_USER_REQUEST:
            return{
                loading: true,
                isAuthenticated : false,
            }    
        
        case REGISTER_USER_SUCCESS:
        case LOGIN_SUCCESS:
        case LOAD_USER_SUCCESS:
            return{
                loading: false,
                isAuthenticated: true,
                user : action.payload,
            }  
        case REGISTER_USER_FAIL:
        case LOGIN_FAIL:
        case LOAD_USER_FAIL:
            return{
                loading: false,
                isAuthenticated: false,
                error: action.payload,
            };
        case LOGOUT_SUCCESS:
            return{
                loading: false,
                user: null,
                isAuthenticated: false,
            }
        case LOGOUT_FAIL:
            return{
                ...state,
                loading: false,
                error: action.payload
            };
        case CLEAR_ERRORS:
            return{
                ...state,
                error: null,
            }
        default: return state                

    }
}