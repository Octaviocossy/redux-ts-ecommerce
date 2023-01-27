import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { IAppStore, IProduct, IProductStore } from '../../models';
import {
  _handleLoading,
  _handleProducts,
  _setError,
  _setProducts,
} from '../states';
import { api } from '../../services';

const useProductActions = () => {
  const { products } = useSelector<IAppStore>(
    (store) => store.product
  ) as IProductStore;

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
