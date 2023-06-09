import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    primary: "Poppins",
  },
  components: {
    // Steps,
  },
  colors: {
    primary: "#FEB032",
    textMuted: "#9EA8B7",
    textBold: "#34373A",
    secondary: "#F3F5F8",
    success: "#04CF3C",
    danger: "red",
  },
});

export default theme;
