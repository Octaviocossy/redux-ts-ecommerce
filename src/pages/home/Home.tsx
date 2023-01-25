import { useEffect, useRef } from 'react';

import { useProductActions } from '../../redux/actions';

import { ProductList } from './components';

const Home = () => {
  const { getProducts } = useProductActions();

  const firstLoad = useRef(true);

  useEffect(() => {
    if (firstLoad.current) {
      firstLoad.current = false;

      return;
    }

    getProducts();
  }, []);

  return (
    <div className="flex flex-col">
      <h1 className="m-auto mb-[2rem]">Pepe Loco - Ecommerce :D</h1>
      <ProductList />
    </div>
  );
};

export default Home;
