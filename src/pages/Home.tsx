import { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';

import { IAppStore, IProductStore } from '../models';
import { useProductActions } from '../redux/actions';

const Home = () => {
  const { getProducts } = useProductActions();
  const { isLoading } = useSelector<IAppStore>(
    (store) => store.product
  ) as IProductStore;

  const firstLoad = useRef(true);

  useEffect(() => {
    if (firstLoad.current) {
      firstLoad.current = false;

      return;
    }

    getProducts();
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return <div className="bg-green-500">c:</div>;
};

export default Home;
