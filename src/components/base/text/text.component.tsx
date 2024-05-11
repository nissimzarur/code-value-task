import IText from "./text.interfaces";

const Text = ({ className, ...props }: IText) => {
  return <span className={`font-mono ${className}`} {...props}></span>;
};
export default Text;
