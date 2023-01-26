import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { IAppStore, ICartStore, IProduct } from '../../models';
import { addProductToCart } from '../states';

const useCartActions = () => {
  const { products } = useSelector<IAppStore>(
    (store) => store.cart
  ) as ICartStore;

  const dispatch = useDispatch();

  const setProductInCart = (product: IProduct) => {
    const { id } = product;

    const searchProductInCart = products.filter(
      (item) => item.product.id === id
    );

    if (!searchProductInCart[0]) {
      dispatch(addProductToCart({ product, count: 0 }));
    } else {
      console.log('In Cart!!!');
    }
  };

  return { setProductInCart };
};

export default useCartActions;
