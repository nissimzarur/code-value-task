import productsStore from "@stores/products-store/products.store";

const useLoadProduct = () => {
  const product = productsStore.selectedProduct || null;

  return product;
};
export default useLoadProduct;
