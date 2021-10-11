import React, {useContext} from "react";


//Styles
import "./Checkout.css"
//Context
import CartContext from "../../../context/CartContext"

//Componentes
import TablePay from "../../../layouts/TableLayout/TablePay";
import { Table } from "react-bootstrap";
import { Button } from "react-bootstrap";
//Styles



const Checkout = () => {
 
  const { state,dispatch } = useContext(CartContext);
  

  return (
      <>
      <div classname="containercheckout">
    <div className="table1">
       <TablePay>
        {state.cart.map((product, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{product.name}</td>
            <td>{product.price}</td>
            <td>
             
            </td>
          </tr>
        ))}
      </TablePay>
     </div>
     </div>
    </>
  );
};

export default Checkout;