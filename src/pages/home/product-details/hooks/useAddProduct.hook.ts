import appStore from "@stores/app-store/app.store";
import productsStore from "@stores/products-store/products.store";
import { IProduct, IProductUpdate } from "@utils/global.interfaces";

const useAddProduct = ()=>{
    const addProductHandler = (productUpdate:IProductUpdate) => {
        const product: IProduct = {...productsStore.selectedProduct, ...productUpdate} as IProduct;
        if(product.isNew) {
            productsStore.add({...product, isNew: false})
            productsStore.setCurrentProduct(null);
            appStore.setNotify({title:"Wow!", desc:"New product added", type:"success"})
        }
        else {
            appStore.setNotify({title:"Great!", desc:"Product updated successfully", type:"success"})
            productsStore.edit(product);
        }
    };

    return addProductHandler;
}
export default useAddProduct;