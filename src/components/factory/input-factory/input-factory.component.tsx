import { Input } from "@components/base";
import IInputFactory from "./input-factory.interfaces";
import RegularInput from "./regular-input/regular-input.component";
import MoneyInput from "./money-input/money-input.component";
import SearchInput from "./search-input/search-input.component";

const InputFactory = ({ type, ...props }: IInputFactory) => {
  switch (type) {
    case "regular":
      return <RegularInput {...props} />;
    case "money":
      return <MoneyInput {...props} />;
    case "search":
      return <SearchInput {...props} />;
    default:
      <Input {...props}/>;
  }
};
export default InputFactory;
