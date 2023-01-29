import { useEffect, useState } from 'react';

interface Props<T> {
  itemList: T[];
  itemsPerPage: number;
}

const usePagination = <T extends Object>({
  itemList,
  itemsPerPage,
}: Props<T>) => {
  const [currentpage, setCurrentPage] = useState(0);
  const [page, setPage] = useState<T[]>([]);

  const handleNextPage = () => {
    const elementCount = itemList.length;
    const nextPage = currentpage + 1;
    const firstIndex = nextPage * itemsPerPage;

    if (firstIndex >= elementCount) return;

    setPage([...itemList].splice(firstIndex, itemsPerPage));
    setCurrentPage(nextPage);
  };

  const handlePreviousPage = () => {
    const prevPage = currentpage - 1;

    if (prevPage < 0) return;

    const firstIndex = prevPage * itemsPerPage;

    setPage([...itemList].splice(firstIndex, itemsPerPage));
    setCurrentPage(prevPage);
  };

  useEffect(() => {
    setPage([...itemList].splice(0, itemsPerPage));
    setCurrentPage(0);
  }, [itemList]);

  const Pagination: React.FC = () => {
    return (
      <div className="flex justify-center mt-6 text-gray-600">
        <button
          disabled={currentpage + 1 === 1 && true}
          onClick={handlePreviousPage}
        >
          {'<'}
        </button>
        <span className="px-2">{currentpage + 1}</span>
        <button
          disabled={
            itemList.length === 0
              ? true
              : Math.ceil(itemList.length / itemsPerPage) === currentpage + 1 &&
                true
          }
          onClick={handleNextPage}
        >
          {'>'}
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
