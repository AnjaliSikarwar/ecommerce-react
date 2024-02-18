import{createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk';
import{composeWithDevTools} from 'redux-devtools-extension';
import { CategoryReducer } from './Reducer/CategoryReducer';
import { ProductReducer, productDetailReducer } from './Reducer/ProductReducer';
import { cartReducer } from './Reducer/CartReducer';
const reducer = combineReducers({
    c:CategoryReducer,
    pd : ProductReducer,
    pdetail:productDetailReducer,
    cart: cartReducer
})
let initialState = {

}
//middlewarethunk
const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunk))
)
export default store;