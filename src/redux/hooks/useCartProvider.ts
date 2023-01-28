import { useSelector } from 'react-redux';

import { IAppStore, ICartStore } from '../../models';

const useCartProvider = () => {
  return useSelector<IAppStore>((store) => store.cart) as ICartStore;
};

export default useCartProvider;
