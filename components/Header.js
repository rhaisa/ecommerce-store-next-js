import Navbar from './Navbar';
import { AppContext } from './AppContext';
import React, { useContext } from 'react';

const Header = () => {
  const [basket, setBasket] = useContext(AppContext);
  return (
    <div>
      <Navbar />
    </div>
  );
};
export default Header;
