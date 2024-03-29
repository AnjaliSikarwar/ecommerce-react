import{createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk';
import{composeWithDevTools} from 'redux-devtools-extension';
import { CategoryReducer } from './Reducer/CategoryReducer';
import { ProductReducer, productDetailReducer } from './Reducer/ProductReducer';
import { cartReducer } from './Reducer/CartReducer';
import { userRegisterReducer } from './Reducer/UserReducer';


const reducer = combineReducers({
    c:CategoryReducer,
    pd : ProductReducer,
    pdetail:productDetailReducer,
    cart: cartReducer,
    auth: userRegisterReducer
})
let initialState = {
    cart: {
        cartItems: localStorage.getItem("cartItems")
        ? JSON.parse(localStorage.getItem("cartItems"))
        :[],
    //     // shippingInfo: localStorage.getItem("shippingInfo")
    //     // ? JSON.parse(localStorage.getItem("shippingInfo"))
    //     // :[],
    }
}
//middlewarethunk
const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunk))
)
export default store;