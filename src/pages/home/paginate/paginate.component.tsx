import { Box, Pagination } from "@components/base";
import { useContext } from "react";
import { FilterProductsContext } from "../context/filter-products.context";
import { PaginateProductsContext } from "../context/paginate.context";

const Paginate = () => {
  const { filteredProducts } = useContext(FilterProductsContext);
  const { setCurrentPage, take, currentPage } = useContext(PaginateProductsContext);

  return (
    <Box className="flex justify-center m-10">
      <Pagination
        totalElements={filteredProducts.length}
        take={take}
        setPage={setCurrentPage}
        currentPage={currentPage}
      />
    </Box>
  );
};
export default Paginate;
