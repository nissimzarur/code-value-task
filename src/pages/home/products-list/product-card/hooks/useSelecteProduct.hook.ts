import productsStore from "@stores/products-store/products.store";
import { IProduct } from "@utils/global.interfaces";

const useSelectProduct = () => {
  const handleSelectProduct = (product: IProduct) => {
    productsStore.setCurrentProduct(product);
  };

  return handleSelectProduct;
};
export default useSelectProduct;
