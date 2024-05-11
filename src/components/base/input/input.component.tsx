import IInput from "./input.interfaces";
import { Box, Text } from "@components/base";

const Input = ({ className, error = "", icon, ...props }: IInput) => {
  return (
    <Box className="flex flex-col w-full">
      <Box className="flex flex-row justify-center items-center gap-5">
        <input
          type="text"
          className={`grow input-bordered border-2 p-2 rounded-md ${className} font-mono`}
          {...props}
        />
        {icon ? icon : <Box />}
      </Box>

      {error.length ? <Text className="text-red-800">{error}</Text> : null}
    </Box>
  );
};
export default Input;
