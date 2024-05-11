import { Box, Input } from "@components/base";
import { IBaseInput } from "utils/global.interfaces";

const MoneyInput = (props: IBaseInput & { error?: string }) => {
  return (
    <Box className="w-full flex justify-center items-center gap-5">
      <Input
        placeholder="Amount"
        type="number"
        min="1"
        {...props}
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 512 512"
          >
            <path
              fill="currentColor"
              d="M296 240h-80a46.222 46.222 0 1 1 0-92.444h128v-32h-68V56h-32v59.556h-28A78.222 78.222 0 0 0 216 272h80a46.274 46.274 0 0 1 46.222 46.222v3.556A46.274 46.274 0 0 1 296 368H160.593v32H244v56h32v-56h20a78.31 78.31 0 0 0 78.222-78.222v-3.556A78.31 78.31 0 0 0 296 240"
            />
          </svg>
        }
      />
    </Box>
  );
};
export default MoneyInput;
