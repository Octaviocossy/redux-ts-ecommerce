import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { IAppStore, ICartStore, IProduct } from '../../models';
import { _handleProductCart } from '../states';

import useProductActions from './product.action';

const useCartActions = () => {
  const { handleProductCartStatus } = useProductActions();
  const { products } = useSelector<IAppStore>(
    (store) => store.cart
  ) as ICartStore;

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
            count: 0,
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

  return { handleProductInCart };
};

export default useCartActions;
