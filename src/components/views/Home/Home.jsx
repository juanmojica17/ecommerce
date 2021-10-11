import React, {useContext} from "react";


//Styles

//Context
import ItemsContext from "../../../context/ItemsContext";

//Componentes
import Product from "../../Product/Product";

//Styles
import "./Home.css"

const Home = () => {
  //Context del listado de productos
  const { state1: State1 } = useContext(ItemsContext);
  
  return (
    <div className="center">
      
    <h6 className="title">The Time In Your Hands</h6>
      <div className="product-list">
        {State1 &&
          State1.products &&
          State1.products.map(product => (
            <Product
              key={product.id}
              name={product.name}
              description={product.desc}
              price={product.price}
              id={product.id}
              img={product.img}
              status="add"
              stock={product.stock}
            />
          ))}
      </div>
    </div>
  );
};

export default Home;