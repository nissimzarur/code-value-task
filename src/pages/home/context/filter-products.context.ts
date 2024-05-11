import { IProduct } from "@utils/global.interfaces";
import React from "react";

export const FilterProductsContext = React.createContext<{
  filteredProducts: IProduct[];
  setFilteredfProducts: (text: string) => void;
}>({
  filteredProducts: [],
  setFilteredfProducts: () => {},
});
