import { useDispatch } from 'react-redux';

import { ICartProduct, IProduct } from '../../models';
import { useCartSelector } from '../selectors';
import { _handleProductCart } from '../states';

import useProductActions from './product.action';

const useCartActions = () => {
  const { handleProductCartStatus } = useProductActions();
  const { products } = useCartSelector();

  const dispatch = useDispatch();

  const handleProductInCart = (product: IProduct) => {
    const { id } = product;

    // Verify if the current product is in the cart
    const searchProductInCart = products.filter(
      (item) => item.product.id === id
    );

    if (!searchProductInCart[0]) {
      // Changes "inCart" status of current product in products state
      handleProductCartStatus({ ...product, inCart: true });

      // Save product in Cart and changes "inCart" status
      dispatch(
        _handleProductCart([
          ...products,
          {
            product: { ...product, inCart: true } as IProduct,
            count: 1,
          },
        ])
      );
    } else {
      // Changes "inCart" status of current product in products state
      handleProductCartStatus({ ...product, inCart: false });

      // Removes product of the Cart
      dispatch(
        _handleProductCart(products.filter((item) => item.product.id !== id))
      );
    }
  };

  const handleProductCount = (product: ICartProduct) => {
    dispatch(
      _handleProductCart(
        products.map((item) =>
          item.product.id === product.product.id ? product : item
        )
      )
    );
  };

  return { handleProductInCart, handleProductCount };
};

export default useCartActions;
