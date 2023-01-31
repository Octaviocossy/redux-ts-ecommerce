import { useEffect, useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

import { Routes } from '../models';

interface Props<T> {
  itemList: T[];
  itemsPerPage: number;
  currentPage: number;
}

const usePagination = <T extends Object>({
  itemList,
  itemsPerPage,
  currentPage,
}: Props<T>) => {
  const [currentpage, setCurrentPage] = useState(currentPage);
  const [page, setPage] = useState<T[]>([]);
  const navigate = useNavigate();

  const handleNextPage = () => {
    const elementCount = itemList.length;
    const nextPage = currentpage + 1;
    const firstIndex = nextPage * itemsPerPage;

    if (firstIndex >= elementCount) return;

    setPage([...itemList].splice(firstIndex, itemsPerPage));
    setCurrentPage(nextPage);
    navigate(`${Routes.PRODUCTS}/${nextPage + 1}`);
  };

  const handlePreviousPage = () => {
    const prevPage = currentpage - 1;

    if (prevPage < 0) return;

    const firstIndex = prevPage * itemsPerPage;

    setPage([...itemList].splice(firstIndex, itemsPerPage));
    setCurrentPage(prevPage);
    navigate(`${Routes.PRODUCTS}/${prevPage + 1}`);
  };

  useEffect(() => {
    setPage([...itemList].splice(currentPage * itemsPerPage, itemsPerPage));
    setCurrentPage(currentPage);
  }, [itemList]);

  const Pagination: React.FC = () => {
    return (
      <div className="flex justify-center mt-6 text-gray-600 my-8 col-span-3">
        <button
          disabled={currentpage + 1 === 1 && true}
          onClick={handlePreviousPage}
        >
          <FaArrowLeft
            className={currentpage + 1 === 1 ? 'text-gray-300' : ''}
          />
        </button>
        <span className="px-4 text-xl">{currentpage + 1}</span>
        <button
          disabled={
            itemList.length === 0
              ? true
              : Math.ceil(itemList.length / itemsPerPage) === currentpage + 1 &&
                true
          }
          onClick={handleNextPage}
        >
          <FaArrowRight
            className={
              itemList.length === 0
                ? 'text-gray-300'
                : Math.ceil(itemList.length / itemsPerPage) === currentpage + 1
                ? 'text-gray-300'
                : ''
            }
          />
        </button>
      </div>
    );
  };

  return {
    Pagination,
    page,
  };
};

export default usePagination;
