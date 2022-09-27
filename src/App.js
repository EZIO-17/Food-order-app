import { Fragment, useState } from 'react';
import './App.css';
import Cart from './components/Cart/Cart';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
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
    <Fragment>
      {cartIsShown && <Cart onClose={hideCartHandeler} />}
      <Header onShowCart={showCartHandeler} />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
