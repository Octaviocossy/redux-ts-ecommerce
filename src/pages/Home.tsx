import { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { IAppStore, IProductStore } from '../models';
import { setProducts, clearError, setError } from '../redux';
import { Axios } from '../services';

const Home = () => {
  const dispatch = useDispatch();
  const productState = useSelector<IAppStore>(
    (store) => store.product
  ) as IProductStore;

  const firstLoad = useRef(true);

  useEffect(() => {
    if (firstLoad.current) {
      firstLoad.current = false;

      return;
    }

    (async () => {
      try {
        const req = await Axios.get('/products');

        dispatch(setProducts(req.data));
        dispatch(clearError());
      } catch (error) {
        dispatch(setError('Error en el fetcheo de data'));
      }
    })();
  }, []);

  if (productState.isLoading) {
    return <p>Loading...</p>;
  }

  return <div className="bg-green-500">c:</div>;
};

export default Home;
