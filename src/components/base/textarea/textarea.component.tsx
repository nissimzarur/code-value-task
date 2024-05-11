import { IBaseTextarea } from "@utils/global.interfaces";
import { Text, Box } from "@components/base";

const Textarea = ({
  rows = 5,
  error = "",
  ...props
}: IBaseTextarea & { error?: string }) => {
  return (
    <Box className="flex flex-col">
      <textarea
        rows={rows}
        className="textarea textarea-bordered"
        {...props}
      ></textarea>
      {error.length ? <Text className="text-red-800">{error}</Text> : null}
    </Box>
  );
};
export default Textarea;
