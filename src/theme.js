import { createTheme } from "@mui/material/styles";

export const shades = {
  primary: {
    100: "#ceced3",
    200: "#9d9da7",
    300: "#6c6d7c",
    400: "#3b3c50",
    500: "#0a0b24",
    600: "#08091d",
    700: "#060716",
    800: "#04040e",
    900: "#020207",
  },
  secondary: {
    100: "#fafaf8",
    200: "#f5f5f1",
    300: "#f1f0eb",
    400: "#ecebe4",
    500: "#e7e6dd",
    600: "#b9b8b1",
    700: "#8b8a85",
    800: "#5c5c58",
    900: "#2e2e2c",
  },
  neutral: {
    100: "#fef8e1",
    200: "#fef2c2",
    300: "#fdeba4",
    400: "#fde585",
    500: "#fcde67",
    600: "#cab252",
    700: "#97853e",
    800: "#655929",
    900: "#322c15",
  },
};

export const theme = createTheme({
  palette: {
    primary: {
      main: shades.primary[500],
    },
    secondary: {
      main: shades.secondary[500],
    },
    neutral: {
      dark: shades.neutral[700],
      main: shades.neutral[500],
      light: shades.neutral[100],
    },
  },
  typography: {
    fontFamily: ["Roboto", "sans-serif"].join(","),
    fontSize: 11,
    h1: {
      fontFamily: ["Montserrat", "sans-serif"].join(","),
      fontSize: 48,
    },
    h2: {
      fontFamily: ["Montserrat", "sans-serif"].join(","),
      fontSize: 36,
    },
    h3: {
      fontFamily: ["Montserrat", "sans-serif"].join(","),
      fontSize: 22,
    },
    h4: {
      fontFamily: ["Montserrat", "sans-serif"].join(","),
      fontSize: 15,
    },
  },
});
