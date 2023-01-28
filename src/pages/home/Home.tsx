import { useFirstLoad } from '../../hooks';
import { useProductActions } from '../../redux/actions';
import { useProductProvider } from '../../redux/hooks';

import { ProductList } from './components';

const Home = () => {
  const { products } = useProductProvider();
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
