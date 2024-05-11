import { IProduct } from "@utils/global.interfaces";
import { useState } from "react";

const useFilterProduct = (products: IProduct[]) => {
  const [filteredProducts, setFilteredfProducts] =
    useState<IProduct[]>(products);
  const filterProduct = (text: string) => {
    const tempProducts = products.filter(
      (p) =>
        p.name.toLowerCase().includes(text.toLowerCase()) ||
        p.description.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredfProducts(tempProducts);
  };

  return {
    filterProduct,
    filteredProducts,
  };
};
export default useFilterProduct;
