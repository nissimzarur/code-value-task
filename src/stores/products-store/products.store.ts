import { EnumSortProducts, IProduct } from "@utils/global.interfaces";
import { generateId } from "@utils/helpers/generateId.helper";
import { generateImage } from "@utils/helpers/generateImage.helper";
import { makeAutoObservable, runInAction } from "mobx";

export class ProductsStore {
  selectedProduct: IProduct | null = null;
  products: IProduct[] = localStorage.getItem("products")
    ? JSON.parse(localStorage.getItem("products") || "")
    : [
        {
          creationDate: new Date(),
          description: "description of the product",
          price: 300,
          id: generateId(),
          name: "product name",
          image: generateImage(),
          isNew: false,
        },
      ];

  constructor() {
    makeAutoObservable(this);
  }

  private arrayToChunks() {
    const array: IProduct[] = localStorage.getItem("products")
      ? JSON.parse(localStorage.getItem("products") || "")
      : [
          {
            creationDate: "",
            name: "",
            description: "",
            id: 123,
            image: "",
            price: 300,
          },
        ];
    const chunkSize = 3;
    const chunks = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      chunks.push(array.slice(i, i + chunkSize));
    }
    return chunks;
  }

  add(product: IProduct): void {
    runInAction(() => {
      this.products.push(product);
      localStorage.setItem("products", JSON.stringify(this.products));
    });
  }

  remove(product: IProduct): void {
    runInAction(() => {
      this.products = this.products.filter((p) => p.id !== product.id);
      localStorage.setItem("products", JSON.stringify(this.products));
    });
  }

  edit(product: IProduct): void {
    runInAction(() => {
      const index = this.products.findIndex((p) => p.id === product.id);
      this.products[index] = product;
      localStorage.setItem("products", JSON.stringify(this.products));
    });
  }

  view(productId: number): IProduct {
    const index = this.products.findIndex((p) => p.id === productId);
    return this.products[index];
  }

  setCurrentProduct(product: IProduct | null): void {
    runInAction(() => {
      this.selectedProduct = product;
    });
  }

  sortProducts(sortBy: EnumSortProducts) {
    switch (sortBy) {
      case EnumSortProducts.ProductName:
        runInAction(() => {
          this.products.sort((a, b) => a.name.localeCompare(b.name));
        });
        break;
      case EnumSortProducts.ProductCreation:
        runInAction(() => {
          this.products.sort(
            (a, b) =>
              new Date(a.creationDate).getTime() -
              new Date(b.creationDate).getTime()
          );
        });
        break;
      default:
        break;
    }
  }
}
const productsStore = new ProductsStore();
export default productsStore;
