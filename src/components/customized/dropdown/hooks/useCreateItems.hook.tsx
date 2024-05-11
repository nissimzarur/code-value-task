import { IOption } from "../dropdown.interfaces";

const useCreateItems = (options: IOption[], onSelect:(option:IOption)=>void) => {
  if (!options.length) return [];

  return options.map((option, index) => {
    return (
      <li key={index}>
        <a className="font-mono" onClick={()=>onSelect(option)}>{option.value}</a>
      </li>
    );
  });
};
export default useCreateItems;
