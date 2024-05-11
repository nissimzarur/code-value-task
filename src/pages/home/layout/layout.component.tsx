import { Box } from "@components/base";
import ILayout from "./layout.interfaces";
import { observer } from "mobx-react-lite";

const Layout = observer(({ header, body, footer }: ILayout) => {
  return (
    <Box className="ml-20 mr-20 mt-10">
      <Box>{header}</Box>
      <Box className="mt-16"/>
      <Box className="flex flex-row gap-5">
        <Box className="w-1/2 ">{body.left}</Box>
        <Box className="w-1/2 ">{body.right}</Box>
      </Box>
      <Box>{footer}</Box>
    </Box>
  );
});
export default Layout;
