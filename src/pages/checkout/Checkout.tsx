import { Dashboard, CartList } from './components';
const Checkout = () => {
  return (
    <div className="flex">
      <CartList />
      <Dashboard />
    </div>
  );
};

export default Checkout;
