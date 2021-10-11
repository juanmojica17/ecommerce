import React from "react";
import { Link } from "react-router-dom";
//Bootstrap components
import { Navbar, Container, Nav } from "react-bootstrap";
//icons
import cart1 from "../../../icons/cart1.png"
//Styles
import "./Header.css";

const Header = ({ cart, total, session, HandleSearchProduct, setSearch, search }) => {
  
  return (
    <div className="width">
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>
          <Link to="/" className="logo">
           JUMO
          </Link><p className="mojicapp">MOJICAPP</p>
        </Navbar.Brand>
        
            {/* <form className="form" onSubmit={HandleSearchProduct}>
            <input class="input" type="search" placeholder="Search" onChange={(e)=>setSearch(e.target.value)} />
            <button class="button" type="submit">Search</button>
            </form> */}
            <Navbar.Text className="total">
          
              Total: {total > 0 ? "$" + total : "$0"}
           
          </Navbar.Text>
          
    <Nav >
       
        <Nav.Link className="link2">
            <Link to="/Cart" className="link">
            {cart.length}<img src={cart1}/>
            </Link>
        </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
    </div>
  );
};

export default Header;