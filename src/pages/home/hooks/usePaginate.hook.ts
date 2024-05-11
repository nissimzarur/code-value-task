import { useState } from "react";

const usePaginate = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);

  return {
    currentPage,
    handleCurrentPage: (page: number) => setCurrentPage(page),
    take: 5,
  };
};
export default usePaginate;
