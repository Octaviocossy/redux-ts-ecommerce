import { useCartSelector } from '../../../redux/selectors';

import CartItem from './CartItem';

const ProductList = () => {
  const { products } = useCartSelector();

  return (
    <div className="flex-1">
      {products.map((item) => (
        <CartItem key={item.product.id} cartProduct={item} />
      ))}
    </div>
  );
};

export default ProductList;
