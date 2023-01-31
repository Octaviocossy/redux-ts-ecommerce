import { BsTrash } from 'react-icons/bs';

import { Button } from '../../../ui';
import { ICartProduct } from '../../../models';
import { useCartActions } from '../../../redux/actions';

interface Props {
  cartProduct: ICartProduct;
}

const CartItem: React.FC<Props> = ({ cartProduct }) => {
  const { handleProductInCart, handleProductCount } = useCartActions();
  const { product, count } = cartProduct;

  return (
    <div key={product.id} className="my-6 flex flex-row py-2 items-center">
      <div className="flex-1 flex flex-row items-center">
        <img
          className={'h-[7rem] rounded-lg mr-2 shadow-md'}
          src={product.image}
        />
        <div className="ml-3">
          <h1 className="font-bold text-xl">{product.name}</h1>
          <p className="max-w-lg text-lg">{product.description}</p>
        </div>
      </div>
      <div className="mr-4 flex items-center">
        <p className="font-semibold mr-4 text-green-500 text-lg">
          ${product.price}
        </p>
        <Button
          disabled={count === 1}
          disabledStyles={'bg-green-200'}
          enableStyles={'bg-green-400 '}
          styles={'px-[0.8rem] py-1 rounded-md'}
          onClick={() =>
            handleProductCount({ ...cartProduct, count: count - 1 })
          }
        >
          -
        </Button>
        <div className="bg-gray-100 w-8 mx-4 rounded-md py-1 flex shadow-md">
          <p className=" font-semibold m-auto">{count}</p>
        </div>
        <Button
          styles={'bg-green-400 px-[0.7rem] py-1 rounded-md'}
          onClick={() =>
            handleProductCount({ ...cartProduct, count: count + 1 })
          }
        >
          +
        </Button>
      </div>
      <Button
        styles={'bg-red-400 px-2 rounded-md'}
        onClick={() => handleProductInCart(product)}
      >
        <BsTrash />
      </Button>
    </div>
  );
};

export default CartItem;
