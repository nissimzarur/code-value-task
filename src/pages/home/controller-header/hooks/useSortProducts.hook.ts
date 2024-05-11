import productsStore from "@stores/products-store/products.store";
import { EnumSortProducts } from "@utils/global.interfaces";

const useSortProducts = ()=>{
    const sortBy = (option:EnumSortProducts)=>{
        productsStore.sortProducts(option);
    }
    return sortBy;
}
export default useSortProducts;