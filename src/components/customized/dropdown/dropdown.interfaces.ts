import { IBaseDiv } from "@utils/global.interfaces";

export default interface IDropdown extends Omit<IBaseDiv, "onSelect"> {
  options: IOption[];
  onSelect: (option: IOption) => void;
  placeholder?: string;
}

export interface IOption {
  key: string;
  value: string;
}
