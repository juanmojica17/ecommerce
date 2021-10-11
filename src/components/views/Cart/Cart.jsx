import React, { useContext, useState,  } from "react";
import { useHistory } from "react-router";
import CartContext from "../../../context/CartContext";
import ItemsContext from "../../../context/ItemsContext";
//Layout
import TableCart from "../../../layouts/TableLayout/TableCart";

//Components
import { Button } from "react-bootstrap";


//Styles
import "./Cart.css";


const Cart = () => {
  const history=useHistory()
  const { state, dispatch } = useContext(CartContext);
  const { state1 } = useContext(ItemsContext);
  const [counter,setCounter]=useState(1)
  

 
  return (
    <>
    <div className="cart">
      <TableCart className="tablecart">
        {state.cart.map((product, index) => (
          <tr key={index}>
            <td>{index  +1  }</td>
            <td>{product.name}</td>
            <td>
              
            
              <img
                src={product.img}
                alt={product.name}
                style={{ maxWidth: "50%" }}
              />
              
              
            </td>
            <td>{counter}</td>
            
            <td>{product.price*counter}</td>
            <td>
              <Button
                variant="danger"
                onClick={() =>
                  dispatch({
                    type: "REMOVE",
                    payload: {
                      id: product.id,
                      name: product.name,
                      price: product.price
                    }
                  })
                }
              >
                Remove
              </Button>
            </td>
          </tr>
        ))}
      </TableCart>
     </div>
    </>
  );
};

export default Cart;