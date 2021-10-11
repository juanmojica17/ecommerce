import React, { useContext } from "react";
import { Link } from "react-router-dom";

//Context
import CartContext from "../../context/CartContext";

//Bootstrap components
import { Table } from "react-bootstrap";
//styles
import "./table.css"
const TableCart = ({ children }) => {
  const { state } = useContext( CartContext);

  return (
    
    <div className="center"
      
    >
      {state.cart.length > 0 ? (
        <div>
        <div className="table">
        <Table className="longtable" striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Product Name</th>
              <th>Product Image</th>
              <th>Amount</th>
              <th>Description</th>
              <th>$</th>
              <th>Actions</th>
            </tr>
          </thead>
        
          <tbody>
           {children}
            
            <tr>
              <td>Total: ${state.totalPrice}</td>
            </tr>
          </tbody>
        </Table>
        </div>
        <div className="buttons">
        <Link to="/"><button className="pay">Add More Items</button></Link><br></br>
        <Link to="/Checkout"><button className="pay">Go To Pay</button></Link>
        </div>
        </div>
      ) : (
        
        <div className="div">
        <p className="emptys">Empty shopping cart</p>
        <br></br><Link  to="/"><button className="empty">COME BACK TO THE STORE</button></Link></div>
      )}
    </div>
  );
};

export default TableCart;