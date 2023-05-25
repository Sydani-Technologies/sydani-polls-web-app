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
    greenBg: "#e8f6ee",
    danger: "red",
    white: "#fff",
    blu: "#130F26",
    lightBlue: "#1976D2",
    secondaryBlue: "#8196B3",
    overlayBlue: "#8196b385",
    customBlack: {
      50: "#474747",
      100: "#474747",
      200: "#474747",
      300: "#474747",
      400: "#474747",
      500: "#000",
      600: "#474747",
      700: "#474747",
      800: "#474747",
      900: "#474747",
    },
  },
});

export default theme;
