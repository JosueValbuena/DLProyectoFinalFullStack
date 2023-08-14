import React, { createContext, useEffect, useState } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [shoppingCart, setShoppingCart] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const getData = async () => {
    const query = await fetch("./db.json");
    const res = await query.json();
    setData(res);
  };

  const totalItems = shoppingCart
    .map((ele) => ele.qty)
    .reduce((a, b) => a + b, 0);

  useEffect(() => {
    getData();
  }, []);

  return (
    <DataContext.Provider
      value={{
        data,
        setData,
        shoppingCart,
        setShoppingCart,
        totalItems,
        isAuthenticated,
        setIsAuthenticated,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
