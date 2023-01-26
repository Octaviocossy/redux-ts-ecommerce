import { RiShoppingCartLine } from 'react-icons/ri';

import { IProduct } from '../../../../models';
import { useCartActions } from '../../../../redux/actions';
import { Button } from '../../../../ui';

interface Props {
  data: IProduct;
}

const ProductItem: React.FC<Props> = ({ data }) => {
  const { setProductInCart } = useCartActions();

  return (
    <div className="m-2 p-4 shadow border w-full max-w-sm flex flex-col">
      <img className="w-[28rem] h-[14rem] rounded-lg" src={data.image} />
      <div className="pt-2 flex flex-col flex-1">
        <div className="py-2">
          <p className="text-xl font-semibold">{data.name}</p>
        </div>
        <p className="text-gray-400 flex-1">{data.description}</p>
      </div>
      <div className="flex pt-4 items-center">
        <p
          className={`flex-1 text-lg font-semibold ${
            data.isBlock ? 'text-red-400' : 'text-green-500'
          }`}
        >
          ${data.isBlock ? ' -' : data.price}
        </p>
        <Button
          disabled={data.isBlock}
          disabledStyles={'bg-gray-200'}
          enableStyles={'bg-green-400 hover:bg-green-500 transition-colors'}
          onClick={() => setProductInCart(data)}
        >
          <RiShoppingCartLine className="mr-2" />
          Add
        </Button>
      </div>
    </div>
  );
};

export default ProductItem;
