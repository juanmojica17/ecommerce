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
  
  const [buy, setBuy]= useState(false);
  const [payload, setPayload] = useState({});
  const [counter, setCounter]=useState(0);
  const [nomore,setNomore]=useState("");
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
    dispatch({ type: "ADD", payload });
    setCounter(counter+1)
    if(counter === stock-1){
      setBuy(true)
      setNomore("No More Items Avaliable")

    }
    
  };

  return (
    <Card className="card" >
      <Card.Img className="cardimg" variant="top" src={img} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <p>amount = {counter}</p>
        <Button className="button"
          disabled={buy}
          variant="dark"
          onClick={() =>handleDispatch({ ...payload })}
        >
          
          
          ${price} +
        </Button>
        <p>{nomore}</p>
      </Card.Body>
    </Card>
  );
};

export default Product;