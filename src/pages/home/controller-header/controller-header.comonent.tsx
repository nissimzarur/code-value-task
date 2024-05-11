import { Box } from "@components/base";
import { Dropdown } from "@components/customized";
import ButtonFactory from "@components/factory/button-factory/button-factory.component";
import InputFactory from "@components/factory/input-factory/input-factory.component";
import { EnumSortProducts } from "@utils/global.interfaces";
import useAddProduct from "./hooks/useAddProduct.hook";
import useSortProducts from "./hooks/useSortProducts.hook";
import { useContext } from "react";
import { FilterProductsContext } from "../context/filter-products.context";

const ControllerHeader = () => {
  const addProduct = useAddProduct();
  const sortBy = useSortProducts();
  const {setFilteredfProducts} = useContext(FilterProductsContext)

  return (
    <Box className="flex flex-row gap-10 items-center">
      <ButtonFactory type="success" onClick={()=>addProduct()} className="w-28">Add</ButtonFactory>
      <InputFactory type="search" placeholder="Search products" onChange={(event)=>setFilteredfProducts(event.currentTarget.value)}/>
      <Dropdown
        onSelect={(option) => {
          sortBy(option.key as EnumSortProducts);
        }}
        options={[
          { key: EnumSortProducts.ProductName, value: "Name" },
          { key: EnumSortProducts.ProductCreation, value: "Creation date" },
        ]}
        placeholder="Sort by"
        className="w-32"
      />
    </Box>
  );
};
export default ControllerHeader;
