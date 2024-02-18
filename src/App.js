import Home from "./Component/Home";
import Footer from "./Component/Layouts/Footer";
import Header from "./Component/Layouts/Header";
import { Route, Routes} from 'react-router-dom';
import Shop from "./Component/Shop";
import ShopDetail from "./Component/ShopDetail";
import Checkout from "./Component/Checkout";
import ProductDetail from "./Component/Product/ProductDetail";
import Cart from "./Component/Cart/Cart";


function App() {
  return (
   <>
   <Header/>
   <Routes>
   <Route path='/' element={<Home/>} />
   <Route path='/shop' element={<Shop/>} />
   <Route path='/shopdetail' element={<ShopDetail/>} />
   <Route path='/shoppingcart' element={<Cart/>} />
   <Route path='/checkout' element={<Checkout/>} />
   <Route path="/productDetail/:id" element={<ProductDetail/>}/>
   
   
   
   </Routes>
   <Footer/>
   </>
  );
}

export default App;
