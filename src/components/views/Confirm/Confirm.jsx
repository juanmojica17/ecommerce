import React,{useContext} from "react";
import "./confirm.css"
import CartContext from "../../../context/CartContext";

const Confirm = () =>{
    const {state,dispatch}=useContext(CartContext)
return(
<div className="confirmcontainer">
    <p className="congratulations">CONGRATULATIONS!!</p>
    <h1 className="payment">Payment Sucefull</h1>
    <a href="/"><button className="finish"  >FINISH</button></a>
</div>
);
}

export default Confirm;