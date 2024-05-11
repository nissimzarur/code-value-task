import { Box, Input } from "@components/base";
import { IBaseInput } from "utils/global.interfaces";

const RegularInput = (props: IBaseInput & { error?: string }) => {
  return (
    <Box className="w-full flex flex-row items-center gap-5">
      <Input
        placeholder="Type here"
        {...props}
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 28 28"
          >
            <path
              fill="currentColor"
              d="M11.75 2a.75.75 0 0 0 0 1.5h1.5v21h-1.5a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 0-1.5h-1.5v-21h1.5a.75.75 0 0 0 0-1.5zm-5.5 4.02h6v1.5h-6A1.75 1.75 0 0 0 4.5 9.27v9.5c0 .966.784 1.75 1.75 1.75h6v1.5h-6A3.25 3.25 0 0 1 3 18.77v-9.5a3.25 3.25 0 0 1 3.25-3.25m15.5 14.5h-6v1.5h6A3.25 3.25 0 0 0 25 18.77v-9.5a3.25 3.25 0 0 0-3.25-3.25h-6v1.5h6c.966 0 1.75.783 1.75 1.75v9.5a1.75 1.75 0 0 1-1.75 1.75"
            />
          </svg>
        }
      />
    </Box>
  );
};
export default RegularInput;
