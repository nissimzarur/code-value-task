//Interfaces
export interface IBaseInput extends React.HTMLProps<HTMLInputElement> {}
export interface IBaseButton
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}
export interface IBaseDiv extends React.HTMLProps<HTMLDivElement> {}
export interface IBaseTextarea extends React.HTMLProps<HTMLTextAreaElement> {}

//Enums
export enum EnumSortProducts {
  ProductName = "product-name",
  ProductCreation = "product-creation",
}

export interface IProduct {
  id: number;
  name: string;
  creationDate: Date;
  price: number;
  description: string;
  image: string;
  isNew: boolean;
}

export type IProductUpdate = Pick<IProduct, 'description'|'name'|'price'>;