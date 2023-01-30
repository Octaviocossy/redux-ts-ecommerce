import { BsTrash } from 'react-icons/bs';

import { Button } from '../../../ui';
import { ICartProduct } from '../../../models';
import { useCartActions } from '../../../redux/actions';

interface Props {
  cartProduct: ICartProduct;
}

const ProductItem: React.FC<Props> = ({ cartProduct }) => {
  const { handleProductInCart, handleProductCount } = useCartActions();

  return (
    <div
      key={cartProduct.product.id}
      className="my-6 flex flex-row py-2 items-center"
    >
      <div className="flex-1 flex flex-row items-center">
        <img
          className={'h-[7rem] rounded-lg mr-2 shadow-md'}
          src={cartProduct.product.image}
        />
        <div className="ml-3">
          <h1 className="font-bold text-xl">{cartProduct.product.name}</h1>
          <p className="max-w-lg text-lg">{cartProduct.product.description}</p>
        </div>
      </div>
      <div className="mr-4 flex items-center">
        <Button
          disabled={cartProduct.count === 1}
          disabledStyles={'bg-green-200'}
          styles={'bg-green-400 px-[0.8rem] py-1 rounded-md'}
          onClick={() =>
            handleProductCount({ ...cartProduct, count: cartProduct.count - 1 })
          }
        >
          -
        </Button>
        <p className="mx-4 font-semibold">{cartProduct.count}</p>
        <Button
          styles={'bg-green-400 px-[0.7rem]  py-1 rounded-md'}
          onClick={() =>
            handleProductCount({ ...cartProduct, count: cartProduct.count + 1 })
          }
        >
          +
        </Button>
      </div>
      <Button
        styles={'bg-red-400 px-2 rounded-md'}
        onClick={() => handleProductInCart(cartProduct.product)}
      >
        <BsTrash />
      </Button>
    </div>
  );
};

export default ProductItem;
