import { Box } from "@components/base";
import { observer } from "mobx-react-lite";
import ControllerHeader from "./controller-header/controller-header.comonent";
import Layout from "./layout/layout.component";
import ProductsList from "./products-list/products-list.component";
import ProductDetails from "./product-details/product-details.component";
import useLoadProducts from "./hooks/useLoadProducts.hook";
import { FilterProductsContext } from "./context/filter-products.context";
import useFilterProduct from "./hooks/useFilterProducts.hook";
import Paginate from "./paginate/paginate.component";
import { PaginateProductsContext } from "./context/paginate.context";
import usePaginate from "./hooks/usePaginate.hook";

const HomePage = observer(() => {
  const products = useLoadProducts();
  const { filterProduct, filteredProducts } = useFilterProduct(products);
  const { currentPage, handleCurrentPage, take } = usePaginate();

  const indexOfLastItem = currentPage * take;
  const indexOfFirstItem = indexOfLastItem - take;
  const currentItems = filteredProducts.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <PaginateProductsContext.Provider
      value={{ currentPage, setCurrentPage: handleCurrentPage, take }}
    >
      <FilterProductsContext.Provider
        value={{ filteredProducts, setFilteredfProducts: filterProduct }}
      >
        <Box>
          <Box>
            <Layout
              header={<ControllerHeader />}
              footer={<Paginate />}
              body={{ left: <ProductsList paginateProducts={currentItems}/>, right: <ProductDetails /> }}
            />
          </Box>
        </Box>
      </FilterProductsContext.Provider>
    </PaginateProductsContext.Provider>
  );
});

export default HomePage;
