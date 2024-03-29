
import {
  ADD_TO_CART,
 REMOVE_CART_ITEM,
  SAVE_SHIPPING_INFO,
} from '../../Redux/Constant/CartConstant'
import axios from "axios";

export const addItemsToCart = (id, quantity) => async (dispatch, getState) => {
  const { data } = await axios.get(`/getProductDetail/${id}`);
  console.log(data);

  dispatch({
    type: ADD_TO_CART,
    payload: {
      product: data.getProductdata._id,
      name: data.getProductdata.name,
      price: data.getProductdata.price,
      image: data.getProductdata.images.url,
      stock: data.getProductdata.Stock,
      quantity,
    },
  });
  localStorage.setItem('cartItems',JSON.stringify(getState().cart.cartItems))
};