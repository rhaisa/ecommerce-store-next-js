import React, { useState, useEffect } from 'react';

export const AppContext = React.createContext([{}, () => {}]);
const key = 'products-in-the-basket';

export const AppProvider = props => {
  const [basket, setBasket] = useState(null);
  useEffect(() => {
    if (process.browser) {
      let basketData = localStorage.getItem('basket-finde-me-beauty');
      basketData = null !== basketData ? JSON.parse(basketData) : '';
      setBasket(basket);
    }
  }, []);
  return (
    <AppContext.Provider value={[basket, setBasket]}>
      {props.children}
    </AppContext.Provider>
  );
};
