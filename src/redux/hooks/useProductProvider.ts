import { useSelector } from 'react-redux';

import { IAppStore, IProductStore } from '../../models';

const useProductProvider = () => {
  return useSelector<IAppStore>((store) => store.product) as IProductStore;
};

export default useProductProvider;
