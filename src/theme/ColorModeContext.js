import * as React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { deepPurple, grey, deepOrange, indigo } from "@mui/material/colors";
import { imageListClasses } from "@mui/material";
import {
  error,
  info,
  primary,
  secondary,
  success,
  warning,
} from "./themeColors";

const fontSize = 14;

export const ColorModeContext = React.createContext({
  toggleColorMode: () => {},
  mode: "light"
});

export const ColorModeContextProvider = ({ children }) => {
  const [mode, setMode] = React.useState("light");

  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
      mode
    }),
    [mode]
  );


  const theme = React.useMemo(
    () =>
      createTheme({
        components: {
          // Name of the component
          MuiButtonBase: {
            defaultProps: {
              // The props to change the default for.
              // disableRipple: true // No more ripple!
            },
          },

          mode,
          ...(mode === "light"
            ? {
                MuiCard: {
                  styleOverrides: {
                    // Name of the slot
                    root: {
                      // Some CSS
                      boxShadow: 2,
                      borderRadius: 5,
                    },
                  },
                },
                MuiTextField: {
                  styleOverrides: {
                    root: {
                      "& .MuiOutlinedInput-root": {
                        "& > fieldset": {
                          // borderColor: "indigo",
                          borderRadius: 5,
                        },
                        "& .MuiInputBase-input.Mui-disabled": {
                          backgroundColor: "#f0f0f0",
                        },
                        "& label": {
                          color: secondary[400],
                          opacity: 1,
                          fontWeight: 800
                        },
                        "& MuiInputBase": {
                          color: secondary[400],
                          opacity: 1,
                          fontWeight: 800
                        }
                      },
                    },
                  },
                },
                MuiButton: {
                  styleOverrides: {
                    // Name of the slot
                    root: {
                      // Some CSS
                      fontSize: "0.8rem",
                      minHeight: 37,
                      borderRadius: 5,
                    },
                  },
                },
                // MuiListItem: { // For ListItem, change this to MuiListItem
                //   root: {
                //     "&$selected": {       // this is to refer to the prop provided by M-UI
                //       backgroundColor: "blue", // updated backgroundColor
                //     },
                //   },
                // },
              }
            : {
                MuiCard: {
                  styleOverrides: {
                    // Name of the slot
                    root: {
                      // Some CSS
                      background: grey[800],
                    },
                  },
                },
                MuiTextField: {
                  fontWeight:800,
                  styleOverrides: {
                    root: {
                      "& .MuiOutlinedInput-root": {
                        "& > fieldset": {
                          borderColor: "grey",
                          borderRadius: 5,
                        },
                        "& .MuiInputBase-input.Mui-disabled": {
                          backgroundColor: "#f0f0f0",
                        },
                        "& label": {
                          color: secondary[400],
                          opacity: 1,
                        },
                      },
                    },
                  },
                },
                MuiTooltip: {
                  styleOverrides: {
                    tooltip: {
                      backgroundColor: grey[50],
                      color: grey[800],
                    },
                  },
                },
              }), 
        },
        shape: {
          borderRadius: 0,
        },
        palette: {
          mode,

          ...(mode === "light"
            ? {
                primary,
                secondary,
                error,
                warning,
                success,
                info,
                divider: secondary[300],
                background: { default: "#2169b3" },
                text: {
                  primary: secondary[500],
                  secondary: secondary[300],
                  disabled: secondary[400],
                },

                // // palette values for light mode
                // primary: indigo,
                // divider: indigo[200],
                // text: {
                //   primary: grey[900],
                //   secondary: grey[800],
                // },
                background: {
                  default: "#F5F5F5",
                },
              }
            : {
                // palette values for dark mode
                // common: {
                //   black: "#f9f9f9",
                //   white: "#ffcc00"
                // },
                primary: {
                  main: indigo[500],
                },
                divider: indigo[700],
                background: {
                  default: "#1e1e1e",
                  paper: "#1e1e1e",
                },
                text: {
                  primary: "#fff",
                  secondary: grey[500],
                },
              }),
        },
        typography: {
            fontFamily: [
              'Lato'
            ].join(','),
          fontSize: 14,
          allVariants: {
            fontFamily: "'Lato'",
            fontSize: 14,
            fontWeight: 500
          },
          h1: {
            color: "blue",
            fontSize: 18,
            fontWeight: 600,
          },
          h2: {
            // color: "indigo",
            fontSize: 16,
            fontWeight: 600,
            paddingTop: 15,
            paddingBottom: 15,
          },
          customInput: {
            marginTop: 1,
            marginBottom: 1,
            "& > label": {
              top: 23,
              left: 0,
              color: "#9E9E9E",
              '&[data-shrink="false"]': {
                top: 5,
              },
            },
            "& > div > input": {
              padding: "30.5px 14px 11.5px !important",
            },
            "& legend": {
              display: "none",
            },
            "& fieldset": {
              top: 0,
            },
          },
          // h1: {
          //   fontWeight: 800,
          //   fontSize: "4.25rem",
          // },
          // h2: {
          //   fontWeight: 600,
          //   fontSize: "4rem",
          // },
          // h3: {
          //   fontWeight: 600,
          //   fontSize: "2.25rem",
          // },
          // h4: {
          //   fontWeight: 600,
          //   fontSize: "2rem",
          // },
          // h5: {
          //   fontWeight: 600,
          //   fontSize: "1.5rem",
          // },
          // h6: {
          //   fontWeight: 600,
          //   fontSize,
          // },
          // overline: {
          //   fontWeight: 600,
          // },
          // body1: { fontSize },
          // body2: { fontSize },
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export const useColorModeContext = () => React.useContext(ColorModeContext);
