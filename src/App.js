import { Fragment, useState } from 'react';
import './App.css';
import Cart from './components/Cart/Cart';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import CartProvider from './store/CartProvider';
// import Card from './components/UI/Card';

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandeler = () => {
    setCartIsShown(true);
  }

  const hideCartHandeler = () => {
    setCartIsShown(false);
  }

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandeler} />}
      <Header onShowCart={showCartHandeler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
