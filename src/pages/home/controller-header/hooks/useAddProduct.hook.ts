import productsStore from "@stores/products-store/products.store";
import { IProduct } from "@utils/global.interfaces";
import { generateId } from "@utils/helpers/generateId.helper";
import { generateImage } from "@utils/helpers/generateImage.helper";

const useAddProduct = () => {
  const addProductHandler = () => {
    const product: IProduct = {
      creationDate: new Date(),
      description: "",
      id: generateId(),
      image: generateImage(),
      name: "",
      price: 0,
      isNew:true
    };
    productsStore.setCurrentProduct(product)
  };

  return addProductHandler;
};
export default useAddProduct;
