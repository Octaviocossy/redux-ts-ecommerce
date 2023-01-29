import { useSelector } from 'react-redux';

import { IAppStore, ICartStore } from '../../models';

const useCartSelector = () => {
  return useSelector<IAppStore>((store) => store.cart) as ICartStore;
};

export default useCartSelector;
