import { extendTheme } from "@chakra-ui/react";
import { lightColors, darkColors } from "../src";

const theme = extendTheme({
  colors: {
    lightColors,
    darkColors,
  },
});

export default theme;
