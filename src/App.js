import React, {  useState,lazy, Suspense } from "react";
import { useHistory, BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
//layouts
import HeaderLayout from "./layouts/HeaderLayout/HeaderLayout"
//Context
import { ItemsProvider } from "./context/ItemsContext";
import { CartProvider } from "./context/CartContext";
//Components
import Home from "./components/views/Home/Home"
import Cart from "./components/views/Cart/Cart"
import Checkout from "./components/views/Checkout/Checkout";
import Confirm from "./components/views/Confirm/Confirm";

const App = () => {

  const [search,setSearch]=useState("")
  const history=useHistory();
  const HandleSearchProduct = e =>{
   e.preventDefault()
    console.log(search)
     }
  

  return (
    <>
            <ItemsProvider>
            <CartProvider>
            <Router>
            <HeaderLayout HandleSearchProduct={HandleSearchProduct}
                          setSearch={setSearch}
                          search={search}>
              <Switch>
                  <Route path="/" exact>
                    <Home search={search}/>
                  </Route>
                  <Route path="/Cart" exact>
                    <Cart />
                  </Route>
                  <Route path="/Checkout">
                    <Checkout/>
                  </Route>
                  <Route path="/Confirm">
                    <Confirm/>
                  </Route>
                  <Route path="*">
                    <h1>404 Not Found</h1>
                  </Route>
                </Switch>
                </HeaderLayout>
              </Router>
              </CartProvider>
              </ItemsProvider>
    </>
  );
};

export default App;
