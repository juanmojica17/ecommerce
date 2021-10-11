import React, { createContext, useReducer } from "react";

const ItemsContext = createContext();

//State
const initialState = {
  products: [
    {
      id: 1,
      name: "GUCCI Snake",
      desc: "Men's dive king snake gold",
      price: 2500,
      img:
        "https://i.pinimg.com/originals/fd/1c/ca/fd1ccaf98cfa66af119140b7ed8ec6f4.jpg",
      stock: 4
    },
    {
      id: 2,
      name: "GUCCI Dive",
      desc: "Men's gucci dive Xl, new jewerly",
      price: 5600,
      img:
        "https://www.newfashionjewels.com/image/cache/data/Prodotti/gucci/ya136206-gucci-800x800.jpg",
      stock: 2
    },
    {
      id: 3,
      name: "HUBLOT unico",
      desc: "Hublot big bang rainbow unico",
      price: 75000,
      img:
        "https://content.thewosgroup.com/productimage/17170791/17170791_1.jpg?impolicy=zoom",
      stock: 1
    },
    {
        id: 4,
        name: "GUCCI Snake",
        desc: "Men's dive king snake gold",
        price: 2500,
        img:
          "https://i.pinimg.com/originals/fd/1c/ca/fd1ccaf98cfa66af119140b7ed8ec6f4.jpg",
        stock: 4
      },
      {
        id: 5,
        name: "GUCCI Dive",
        desc: "Men's gucci dive Xl, new jewerly",
        price: 5600,
        img:
          "https://www.newfashionjewels.com/image/cache/data/Prodotti/gucci/ya136206-gucci-800x800.jpg",
        stock: 2
      },
      {
        id: 6,
        name: "HUBLOT unico",
        desc: "Hublot big bang rainbow unico",
        price: 75000,
        img:
          "https://content.thewosgroup.com/productimage/17170791/17170791_1.jpg?impolicy=zoom",
        stock: 1
      }
  ]
};

const reducer = (state, action) => {
  switch (action.type) {   
    case "FILTER":
        return{
          ...state,
          products:state.products.filter()
        }
    default:
      return state;
      
  }
};

const ItemsProvider = ({ children }) => {
  const [state1, dispatch] = useReducer(reducer, initialState);
  const data = { state1 };

  return (
    <ItemsContext.Provider value={data}>
      {children}
    </ItemsContext.Provider>
  );
};

export { ItemsProvider };
export default ItemsContext;