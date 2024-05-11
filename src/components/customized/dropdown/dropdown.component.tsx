import IDropdown from "./dropdown.interfaces";
import useCreateItems from "./hooks/useCreateItems.hook";

const Dropdown = ({
  options,
  placeholder = "Options",
  onSelect,
  className,
  ...props
}: IDropdown) => {
  const items = useCreateItems(options, onSelect);
  return (
    <div className={`dropdown`} {...props}>
      <div tabIndex={0} role="button" className={`btn m-1 font-mono ${className}`}>
        {placeholder}
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
      >
        {items}
      </ul>
    </div>
  );
};
export default Dropdown;
