import { useMemo } from 'react';
import { RiShoppingCartLine } from 'react-icons/ri';

import { useCartSelector } from '../../../redux/selectors';

const Dashboard = () => {
  const { products } = useCartSelector();

  const { price, count } = useMemo(() => {
    return products.reduce(
      ({ price, count }, item) => {
        return {
          price: price + item.count * item.product.price,
          count: count + item.count,
        };
      },
      {
        price: 0,
        count: 0,
      }
    );
  }, [products]);

  return (
    <div className="ml-[2rem] p-8 flex flex-col items-center mt-[2rem]">
      <RiShoppingCartLine className="w-[5rem] h-[5rem]" />
      <div className="flex flex-col space-y-3 mt-[2rem]">
        <h2 className="text-2xl font-semibold">Cart</h2>
        <p className="text-xl">
          Count of Products: <span className="font-bold">{count}</span>
        </p>
        <p className="text-xl">
          Total Price:{' '}
          <span className="text-green-500 font-bold">${price}</span>
        </p>
      </div>
    </div>
  );
};

export default Dashboard;
