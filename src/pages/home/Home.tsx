import { useSelector } from 'react-redux';

import { useFirstLoad } from '../../hooks';
import { IAppStore, IProductStore } from '../../models';
import { useProductActions } from '../../redux/actions';

import { ProductList } from './components';

const Home = () => {
  const { products } = useSelector<IAppStore>(
    (store) => store.product
  ) as IProductStore;

  const { getProducts } = useProductActions();

  useFirstLoad(!products[0] ? getProducts : null);

  return (
    <div className="flex flex-col mt-[2rem]">
      <h1 className="m-auto mb-[2rem] text-3xl font-bold">fakecommerce</h1>
      <ProductList />
    </div>
  );
};

export default Home;
