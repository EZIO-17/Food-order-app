import { Fragment, useState } from 'react';
import './App.css';
import Cart from './Pages/Menu_page/components/Cart/Cart';
import Header from './Pages/Menu_page/components/Layout/Header'
import Meals from './Pages/Menu_page/components/Meals/Meals'
import CartProvider from './store/CartProvider';


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
