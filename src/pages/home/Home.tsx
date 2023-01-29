import { useFirstLoad } from '../../hooks';
import { useProductActions } from '../../redux/actions';
import { useProductSelector } from '../../redux/selectors';

import { ProductList } from './components';

const Home = () => {
  const { products } = useProductSelector();
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
