import { useState,createContext, useEffect } from "react";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import SingleProduct from "./components/SingleProduct";
// import { Provider } from "react-redux";
import './App.css'
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import Navbar from "./components/Navbar";
import Footer from "./pages/Footer";
// import store from "./store/store";
const data = createContext();
function App() {
  const [count,setCount]=useState(0);
  const [items,setItems]=useState([]);
  // const [cart,setCart]=useState({});

  function addToCart(event,product) {
    // window.localStorage.setItem('cart',JSON.stringify({...items,product}))
    setItems((prev)=>
    {
        return [...prev,product]
    })
    setCount(count+1);
    // alert(`item ${product.title}  is added succesfully...`)
  }
  function removeToCart() {
    if (count === 0) {
      return setCount(0)
    }
    setCount(count-1)
  }
  useEffect(()=>{
    localStorage.setItem('cart',JSON.stringify(items))
  },[items])
  return (
    <div>
     
      <data.Provider value={addToCart}>
        <BrowserRouter>
          <Navbar  count={count}/>
          <Routes>
            <Route exact path='/'  element={<Home />}></Route>
            <Route exact path='/mens'  element={<Home key="men's clothing" category="men's clothing"/>}></Route>
            <Route exact path='/womens'  element={<Home key="women's clothing" category="women's clothing"/>}></Route>
            <Route exact path='/jewelerys'  element={<Home key="jewelery" category="jewelery"/>}></Route>
            <Route exact path='/electronics'  element={<Home  key="electronics"category="electronics"/>}></Route>
            <Route path='/product/:id' exact element={<SingleProduct />}></Route>
            <Route path='/cart' element={<Cart count={count} removeToCart={removeToCart}/>}></Route>
          </Routes>
          <Footer/>
        </BrowserRouter>
        </data.Provider>
   
    </div> 
  );
}
export {data}
export default App;

