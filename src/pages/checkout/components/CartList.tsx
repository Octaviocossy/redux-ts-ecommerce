import { useCartSelector } from '../../../redux/selectors';

import CartItem from './CartItem';

const CartList = () => {
  const { products } = useCartSelector();

  return (
    <div className="flex-1 mt-[2rem]">
      {products[0] ? (
        products.map((item) => (
          <CartItem key={item.product.id} cartProduct={item} />
        ))
      ) : (
        <div className="flex justify-center items-center h-[15rem]">
          <p className="font-bold text-3xl">Products not found</p>
        </div>
      )}
    </div>
  );
};

export default CartList;
