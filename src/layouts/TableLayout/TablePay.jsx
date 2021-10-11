import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";

//assets
import cardspay from "../../assets/cardspay.png"
//Context
import CartContext from "../../context/CartContext";

//Bootstrap components
import { Table } from "react-bootstrap";
//styles
import "./Tablepay.css"

const TablePay = ({ children }) => {

  const [validation,setValidation]=useState("")
  const [error, setError]=useState(true)
  const [uname,setUname]=useState("")
  const [card,setCard]=useState("")
  const [date,setDate]=useState("")
  const [cvd,setCvd]=useState("")
  const { state } = useContext( CartContext);
  const paysubmit=()=>{

    if(uname.indexOf(1,2,3,4,5,6,7,8,9)>-1){
      alert("error name on card : only letters space")
      setError(true);
    }else{setError(false)}
    if(card.length===16){
      console.log(card.length)
    }else{
      alert("error name on card : min or max 16 carachters")
      setError(true);
      console.log(card.length)
    }
   

    if(card.indexOf("a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z")>-1){
      alert("error card number : only numbers space")
      setError(true);
    }else{setError(false)}
    if(date.indexOf("a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z")>-1){
      alert("error in expires date : only numbers space")
      setError(true);
    }else{setError(false)}
    if(cvd.length>3){
      alert("wrong securre number")
      setError(true);
    }else{setError(false)}
    if(cvd.length<3){
      alert("wrong securre number")
      setError(true);
    }else{setError(false)}
    if(error===false){
      setValidation("validation complete")
    }


    console.log(uname)
    console.log(card)
    console.log(date)
    console.log(cvd)
  }
  return (
    <div classname="containercheckout">
    <div
      style={{
        background: "white",
        width: "100%",
        margin: "auto",
        marginTop: 0,
        textAlign: "center"
      }}
    >
      {state.cart.length > 0 ? (
        <div>
        <div className="fix">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Product Name</th>
              <th>$</th>
              
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
        <Link to="/Cart"><button className="update">Update</button></Link>
        <div ><img className="img" src={cardspay}/></div>
        <form  className="form">
        <div   >
            <span className="span" >Card Name</span>
            <input type="text" className="input" placeholder="Card Name" onChange={(e)=>setUname(e.target.value)} />
        </div>
        <div >
            <span className="span" >Card Number</span>
            <input type="text" className="input" placeholder="Card Number" onChange={(e)=>setCard(e.target.value)}  />
        </div>
        <div className="shorts">
        <div >
            <span className="span" >Expires</span>
            <input type="text" className="input2" placeholder="MM/YYYY" onChange={(e)=>setDate(e.target.value)} />
        </div>
        <div >
            <span className="span" >CVD</span>
            <input type="text" className="input2" placeholder="***" onChange={(e)=>setCvd(e.target.value)} />
        </div>
        </div>
       
        <button className="submit-pay" type="button" onClick={paysubmit}>Validate Information</button><p>{validation}</p>
        <br></br>
       
        <Link to="/Confirm"><button disabled={error}  type="button"  className="submit-pay">Submit Pay</button></Link>
        
        </form>
        
        </div>
        
      ) : (
        <>
        <h1 >Empty shopping cart</h1>
        <br></br><Link className="empty" to="/Cart"><button className="empty">REVIEW</button></Link></>
      )}
    </div>
    </div>
  );
};

export default TablePay;