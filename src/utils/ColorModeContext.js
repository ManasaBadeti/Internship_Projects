import * as React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { deepPurple, grey, deepOrange, indigo } from "@mui/material/colors";
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
        typography: {
          fontSize:12,
          // Name of the component
          h4: {
            fontSize:12,
            marginBottom: 20,
            borderBottom: "solid 1 px #EAEAEA",
            fontSize:"20px",
            fontWeight:"600",
            fontSize:"16px",
            lineHeight:"2",
           }, 
           h6:{
            fontSize:"16px",
            fontWeight:"600",
            
           },
           body1:{
              fontWeight: 500,
            },
            button:{
              
            },
            
          },
        components: {
          // Name of the component
          MuiButtonBase: {
            defaultProps: {
              // The props to change the default for.
              // disableRipple: true // No more ripple!
            }
          },

          mode,
          ...(mode === "light"
            ? {
              MuiCard: {                
                styleOverrides: {                
                //     // Name of the slot  
                root: {
                 //       // Some CSS                
                background: "#fff",                
                borderRadius: 8,                
                boxShadow:'0px 7px 15px -5px rgba(0, 0, 0, 0.2)',                
                marginTop:20,                
                marginBottom:20,                
                // padding:10,                
                },                
                outlined: {                  
                background: "purple",                  
                color: "red"                
                }                               
                }                
                },
                MuiCardContent:{
                  styleOverrides:{
                    root: {
                      paddingBottom: 8,
                      paddingTop: 10,
                      paddingLeft: 16,
                      paddingRight: 16,
                      marginTop: 8,
                    }

                  }
                },
                MuiBox:{
                  styleOverrides:{
                    root:{
                      // padding: ,
                      // marginTop: 24,
                    }
                  }
                  
                },
                MuiFormLabel: {
                  styleOverrides: {
                    root: {
                      display: "flex",
                    width: "max-content",
                   
                    },
                    asterisk: {
                      color: "red",
                      "&$error": {
                        color: "#db3131",
                      },
                      
                    },
                    
                  },
                },
                MuiTextField: {
                  styleOverrides: {
                  //     // Name of the slot
                  root: {
                  //       // Some CSS
                  background: "#fff",
                  borderRadius: 6,
                  fontSize: "10 ",
                  marginBottom:20,
                  color:"#EAEAEA",
                  
                  }
                  }
                  },
                  MuiTableHead:{
                    styleOverrides:{
                      root:{
                        background:'#F5FAFF',
                        fontSize:"10",
                        color:"#4B4B4B",
                        // textAlign:'center'
                      }
                    }
                  },
                  MuiFormControlLabel:{
                    styleOverrides: {
                      root:{
                        marginBottom:20
                      }
                    }
                  },
                  MuiTypography:{
                    styleOverrides:{
                      h4:{
                        // marginBottom:20,
                        borderBottom: 'solid 1px #EAEAEA',
                        fontSize: "16px",
                        marginBottom:"20px",
                        fontWeight: "600",
                        // fontSize:"16px",
                        lineHeight:"2",
                        color: "#2169B2",
                      },
                      h2:{
                        fontWeight: "500",
                        fontSize:"18px",
                        fontFamily: 'Lato, sans-serif'
                      },
                      h3:{
                        
                        // fontSize: "20px",
                        // marginBottom:"30px",
                        // marginTop: 10,
                        fontWeight: "500",
                        fontSize:"32px",
                        // lineHeight:"2",
                        // color: "#000",
                      },
                      h5:{
                        fontFamily:'serif',
                        color:'#808080',
                        fontSize: '16px',
                      }
                    }
                  },
              }
            : {
              MuiCard: {                
                styleOverrides: {                
                //     // Name of the slot  
                root: {
                 //       // Some CSS                
                background: "#fff",                
                borderRadius: 8,                
                boxShadow:'0px 10px 25px -5px rgba(0, 0, 0, 0.1)',                
                marginTop:20,                
                marginBottom:20,                
                // padding:10,                
                },                
                outlined: {                  
                background: "purple",                  
                color: "red"                
                }                               
                }                
                },
                MuiFormLabel: {
                  styleOverrides: {
                    root: {
                      display: "flex",
                    width: "max-content",
                   
                    },
                    asterisk: {
                      color: "red",
                      "&$error": {
                        color: "#db3131",
                      },
                      
                    },
                    
                  },
                },
                MuiTextField: {
                  styleOverrides: {
                  //     // Name of the slot
                  root: {
                  //       // Some CSS
                  background: "#989c99",
                  borderRadius: 6,
                  fontSize: "10 ",
                  marginBottom:20,
                  color:"#EAEAEA",
                  
                  }
                  }
                  },
                  MuiTableHead:{
                    styleOverrides:{
                      root:{
                        background:'#F5FAFF',
                        fontSize:"10",
                        color:"#4B4B4B",
                        // textAlign:'center'
                      }
                    }
                  },
                  MuiFormControlLabel:{
                    styleOverrides: {
                      root:{
                        marginBottom:20
                      }
                    }
                  },
                  MuiTypography:{
                    styleOverrides:{
                      h4:{
                        marginBottom:20,
                        borderBottom: 'solid 1px #EAEAEA',
                        fontSize: "20px",
                        marginBottom:"30px",
                        fontWeight: "600",
                        fontSize:"16px",
                        lineHeight:"2",
                        color: "#2169B2",
                      },
                      h3:{
                        
                        // fontSize: "20px",
                        // marginBottom:"30px",
                        fontWeight: "600",
                        fontSize:"32px",
                        // lineHeight:"2",
                        color: "#fff",
                      }
                    }
                  },

                MuiTooltip: {
                  styleOverrides: {
                    tooltip: {
                      backgroundColor: grey[50],
                      color: grey[800]
                    }
                  }
                }
              })
        },
        shape: {
          borderRadius: 0
        },
        palette: {
          mode,

          ...(mode === "light"
            ? {
                // palette values for light mode
                primary: {
                  main:"#2169B2"
                },
                secondary:{
                  main:'#f50057'
                },
                text: {
                  primary: "#000",
                  hint:"#8a78ea",
                  secondary: '#000'
                },
                background: {
                  default: "#F5FBFC",
                  // default:"#FAFBFC"
                },
                
              }
            : {
                // palette values for dark mode
                // common: {
                //   black: "#f9f9f9",
                //   white: "#ffcc00"
                // },
                primary: {
                  main: indigo[300]
                },
                divider: indigo[700],
                background: {
                  default: "#1e1e1e",
                  paper: "#1e1e1e"
                },
                text: {
                  primary: "#fff",
                  secondary: grey[500]
                }
              })
        }
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
