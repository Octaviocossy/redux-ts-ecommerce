import { useDispatch } from 'react-redux';

import { api } from '../../services';
import { handleLoading, setError, setProducts } from '../states';

const useProductActions = () => {
  const dispatch = useDispatch();

  const getProducts = async () => {
    dispatch(handleLoading());

    const { type, value } = await api.get('products');

    if (type === 'success') {
      dispatch(setProducts(value));
    }

    if (type === 'error') {
      dispatch(setError(value.message));
    }
  };

  return { getProducts };
};

export default useProductActions;
