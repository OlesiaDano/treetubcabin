import { createTheme } from "@mui/material/styles";
import { lighten } from "polished";

export const Colors = {
  primary: "#3e778e",
  secondary: "#3e8e7d",
  transperent: "rgba(0, 18, 6, 0.51)",
  success: "#4caf50",
  info: "#3e4f8e",
  complementary: "#8e553e",
  dark: "#22414d",
  light: "#98bccd",
  border: "#032d3b",
  inverse: "#e64e98",
  dove_gray: "#d5d5d5",
  white: "#fff",
  black: "#000",
};

const overrides = {
  palette: {
    primary: {
      main: Colors.primary,
    },
    secondary: {
      main: Colors.secondary,
    },
  },

  components: {
    MuiDrawer: {
      styleOverrides: {
        paper: {
          background: Colors.dark,
          color: Colors.dove_gray,
          borderRadius: "0px 10px 10px 0px",
          borderRight: `1px solid ${Colors.primary}`,
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: lighten(0.2, Colors.dark)
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: Colors.complementary
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiInputBase-root': {
            color: 'red', // Change text input color
          },
          '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: 'blue', // Change border color when focused
          },
          '& .MuiInputLabel-root.Mui-focused': {
            color: 'green', // Change label color when focused
          },
          '& .Mui-focused': {
            color: 'green', // Change label color when focused
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          position: 'relative',
          transform: 'none',
          color: Colors.complementary, // Use 'inherit' to maintain the default color
          background: 'inherit', // Use 'inherit' to maintain the default background
          padding: '0 5px',
          top: 0,
          left: 0,
          '&.MuiInputLabel-shrink': {
            transform: 'none',
            top: '-8px', // Adjust the top position when the label is in the "shrink" state
            left: '5px', // Adjust the left position when the label is in the "shrink" state
            fontSize: 12, // Adjust the font size when the label is in the "shrink" state
          },
        },
      },
    },
  },
};

const theme = createTheme({
  overrides: overrides,
});

export { overrides };
export default theme;
