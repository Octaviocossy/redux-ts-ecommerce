import { useParams } from 'react-router-dom';

import { usePagination } from '../../../../hooks';
import { useProductSelector } from '../../../../redux/selectors';
import { SkeletonCard } from '../../../../ui';

import ProductItem from './ProductItem';

const ProductList = () => {
  const { page } = useParams();
  const { products, isLoading } = useProductSelector();
  const { Pagination, page: _page } = usePagination({
    itemList: products,
    itemsPerPage: 6,
    currentPage: Number(page) - 1,
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
      {_page.map((product) => (
        <ProductItem key={product.id} data={product} />
      ))}
      <Pagination />
    </div>
  );
};

export default ProductList;
