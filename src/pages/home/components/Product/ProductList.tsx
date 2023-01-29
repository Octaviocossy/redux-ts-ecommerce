import { useProductSelector } from '../../../../redux/selectors';
import { SkeletonCard } from '../../../../ui';

import ProductItem from './ProductItem';

const ProductList = () => {
  const { products, isLoading } = useProductSelector();

  if (isLoading) {
    return (
      <div className="flex flex-wrap">
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
      </div>
    );
  }

  return (
    <div className="grid grid-cols-3 justify-items-center">
      {products.map((product) => (
        <ProductItem key={product.id} data={product} />
      ))}
    </div>
  );
};

export default ProductList;
