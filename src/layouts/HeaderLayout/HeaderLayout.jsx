   
import React, { useContext } from "react";

//Components
import Header from "../../components/Global/Header/Header";
import CartContext from "../../context/CartContext";


const HeaderLayout = ({ children, HandleSearchProduct, setSearch, search  }) => {
  const { state: cartState } = useContext(CartContext);

  return (
    <>
      <Header
        cart={cartState.cart}
        total={cartState.totalPrice}
        name={cartState.user}
        HandleSearchProduct={HandleSearchProduct}
        setSearch={setSearch}
        search={search}
      />
      {children}
    </>
  );
};

export default HeaderLayout;