import { useFirstLoad } from '../../hooks';
import { useProductActions } from '../../redux/actions';

import { ProductList } from './components';

const Home = () => {
  const { getProducts } = useProductActions();

  useFirstLoad(getProducts);

  return (
    <div className="flex flex-col mt-[2rem]">
      <h1 className="m-auto mb-[2rem] text-3xl font-bold">fakecommerce</h1>
      <ProductList />
    </div>
  );
};

export default Home;
