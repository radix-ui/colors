import { extendTheme } from "@chakra-ui/react";
import { light, dark } from "../src";

const theme = extendTheme({
  colors: {
    light,
    dark,
  },
});

export default theme;
