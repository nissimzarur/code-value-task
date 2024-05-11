import productsStore from "@stores/products-store/products.store";

const useLoadProducts = ()=>{
    const products = productsStore.products || [];

    return products;
}
export default useLoadProducts;