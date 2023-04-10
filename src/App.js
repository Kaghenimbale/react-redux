import './App.css';
import CartContainer from './component/CartContainer';
import Navbar from './component/Navbar';
import { useSelector, useDispatch } from 'react-redux';
import { calculateTotals } from './features/cart/CartSlice';
import { useEffect } from 'react';
import Modal from './component/Modal';

function App() {
  const { cartItems } = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems, dispatch]);
  return (
    <main>
      <Modal />
      <Navbar />
      <CartContainer />
    </main>
  );
}

export default App;
