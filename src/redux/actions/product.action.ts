import { useDispatch } from 'react-redux';

import { IProduct } from '../../models';
import {
  _handleLoading,
  _handleProducts,
  _setError,
  _setProducts,
} from '../states';
import { api } from '../../services';
import { useProductProvider } from '../hooks';

const useProductActions = () => {
  const { products } = useProductProvider();

  const dispatch = useDispatch();

  const getProducts = async () => {
    dispatch(_handleLoading());

    const { type, value } = await api.get('products');

    if (type === 'success') {
      const data = value as IProduct[];

      dispatch(
        _setProducts(
          data.map((item) => {
            item.inCart = false;

            return item;
          })
        )
      );
    }

    if (type === 'error') {
      dispatch(_setError(value.message));
    }
  };

  const handleProductCartStatus = (_product: IProduct) => {
    dispatch(
      _handleProducts(
        products.map((product) =>
          product.id === _product.id ? _product : product
        )
      )
    );
  };

  return { getProducts, handleProductCartStatus };
};

export default useProductActions;
