import usePagination from '../../../../hooks/usePagination';
import { useProductSelector } from '../../../../redux/selectors';
import { SkeletonCard } from '../../../../ui';

import ProductItem from './ProductItem';

const ProductList = () => {
  const { products, isLoading } = useProductSelector();
  const { Pagination, page } = usePagination({
    itemList: products,
    itemsPerPage: 6,
  });

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
      {page.map((product) => (
        <ProductItem key={product.id} data={product} />
      ))}
      <Pagination />
    </div>
  );
};

export default ProductList;
