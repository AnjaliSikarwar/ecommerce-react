import{
    REGISTER_USER_SUCCESS,
    REGISTER_USER_REQUEST,
    REGISTER_USER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_REQUEST,
    CLEAR_ERRORS,
    LOGIN_FAIL
} from '../Constant/UserConstant'
import axios  from 'axios'

export const createUser = (formData) => async(dispatch) => {
    try {
        dispatch({type:REGISTER_USER_REQUEST})
        let link = '/userinsert'    // jab hum register ka form submit karenge phir hum iss action par aayenge phir humari yh api chalegi 
                                    // link jayegi data uth ke jayega toh yh data sidha uthke api ke paas jayega data insert ho jayega aur phir console me uth ke aa jayega
        const {data} = await axios.post(link , formData)
        // console.log(data)

        dispatch({
            type: REGISTER_USER_SUCCESS,
            payload: data
        })
    } catch (err) {
        dispatch({
            type: REGISTER_USER_FAIL,
            payload: err.response.data.message
        })
    }
    
}
  export const userLogin = (email, password) => async (dispatch) => {
    try {
        dispatch({type: LOGIN_REQUEST})
        // console.log(email,password)

        const config = {
            headers: {
                "content-type": "application/json",
            },
        }

        let link = '/loginUser'
        const {data} = await axios.post(link, {email, password}, config)
        console.log(data)

        dispatch({
            type: LOGIN_SUCCESS,
            payload: data.user
        })
    } catch (err) {
       dispatch({
        type: LOGIN_FAIL,
        payload: err.response.data.message
       }) 
    }
  }
    //for clearing errors
    export const clearErrors = () => async (dispatch) => {
        dispatch({type: CLEAR_ERRORS})
}