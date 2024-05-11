import appStore from "@stores/app-store/app.store";
import productsStore from "@stores/products-store/products.store";
import { IProduct } from "@utils/global.interfaces";

const useRemoveProduct = ()=>{
    const removeProductHandler = (product:IProduct) => {
        productsStore.remove(product);
        appStore.setNotify({title:"OK!", desc:"Product removed", type:"success"})
    };

    return removeProductHandler;
}
export default useRemoveProduct;