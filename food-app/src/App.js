
import { useState } from 'react/cjs/react.development';

import './App.css';
import Cart from './Components/Cart/Cart';
import Header from './Components/Layout/Header';
import Meals from './Components/Meals/Meals';
import CartProvider from './Components/Store/CartProvider';
const App = () => {

  const [cartIsShow, setCartIsShow] = useState(false)

  const showCartHandler = () => {
    setCartIsShow(true);
  };

  const hideCardHandler = () => {
    setCartIsShow(false);
  };


  return (
    <CartProvider>
      {cartIsShow && <Cart onClose={hideCardHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
};
export default App;

