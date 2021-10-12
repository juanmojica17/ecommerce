import React, { useContext, useEffect, useState } from "react";

//Context
import CartContext from "../../context/CartContext";
import ItemsContext from "../../context/ItemsContext";
//Bootstrap components
import { Card, Button } from "react-bootstrap";
//styles
import "../Product/Product.css"




const Product = ({ name, description, price, id, img, stock, status }) => {
  const { state, dispatch } = useContext(CartContext);
  const  {state1}   = useContext(ItemsContext);
  const [counter,setCounter] =useState(0);
 
  const [payload, setPayload] = useState({});
  
  const cartfind =state.cart.find(p=>p.id===id);
  useEffect(() => {
    setPayload({
      name,
      description,
      price,
      id,
      img,
      stock
      
    });
  }, []);

  const handleDispatch = payload => {
    
    const verifyCart=state.cart.filter(p=>p.id===payload.id)
    if(verifyCart.length>0){
      const newproduct={...verifyCart[0], quantity: verifyCart[0].quantity + 1}
      return dispatch({type: "ADDOTHER", payload:newproduct });
       }
       setCounter(counter + 1);
    
    dispatch({ type: "ADD", payload });
    

   
    
  };


  return (
    <Card className="card" >
      <div className="divimg">
      <Card.Img className="cardimg" variant="top" src={img} />
      </div>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <p>AMOUNT = {cartfind?.quantity||0}</p>
        <Button className="button"
          disabled={cartfind?cartfind.quantity===stock:false}
          variant="dark"
          onClick={() =>handleDispatch({ ...payload })}
        >
          
          
          ${price} +
        </Button>
        {cartfind?.quantity === stock &&
        <p>not avaliable</p>}
      </Card.Body>
    </Card>
  );
};

export default Product;