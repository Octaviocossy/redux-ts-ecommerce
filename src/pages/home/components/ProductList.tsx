import { useSelector } from 'react-redux';

import { IAppStore, IProductStore } from '../../../models';
import { Spinner } from '../../../ui';

const ProductList = () => {
  const { isLoading } = useSelector<IAppStore>(
    (store) => store.product
  ) as IProductStore;

  if (isLoading) {
    return <Spinner />;
  }

  return <div>ProductList</div>;
};

export default ProductList;
