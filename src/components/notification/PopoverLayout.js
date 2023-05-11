import { Box, ButtonBase, Chip, Divider, Grid, Popover} from "@mui/material";
import { H4 } from "../typography/Typography";
import React, { useEffect, useRef } from "react";
import FaceIcon from '@mui/icons-material/Face';

// import { GifBox } from "@mui/icons-material";

const PopoverLayout = props => {
  const {
    children,
    popoverClose,
    popoverOpen,
    anchorRef,
    title,
    hiddenViewButton,
    minWidth,
    maxWidth,
    notificationCount,
    length,
  } = props
  
  const contentRef = useRef(null);
  useEffect(() => {
    if(contentRef.current){
      const contentEl = contentRef.current;
      contentEl.style.height = `calc(100% - ${contentEl.offsetTop}px)`
    }
  }, [popoverOpen])

  const handleNotification = () =>{
    console.log('Just to give the effect')
  }
  return (
    <Popover
      open={popoverOpen}
      onClose={popoverClose}
      anchorEl={anchorRef.current}
      anchorOrigin={{ horizontal: "center", vertical: "bottom" }}
      PaperProps={{
        sx: {
          minWidth: minWidth || 250,
          maxWidth: maxWidth || 375,
          width: "100%",
          padding: "0 0",
          borderRadius: '10px',
          maxHeight:'300px',
        }
      }}
      >
      <Box sx={{position:'relative'}}>
      <Box style={{position:'sticky', top:0, zIndex:10000}}>
        <Grid container sx={{backgroundColor:'#287ED6', minWidth:'555px'}} display='flex' justifyContent={'space-between'}>
        <H4 fontWeight="700" pl={2} py={1}>
          {title}
        </H4>
        <Box pr={2} py={0.4}>
          {notificationCount && 
            <Chip label={notificationCount} onClick={handleNotification} variant="outlined"/>
          }
        </Box>
        <Divider />
        </Grid>
      </Box>
      <Box ref ={contentRef} 
      sx={{
        overflowY:"scroll",
        maxHeight:"200px",
        "&::-webkit-scrollbar":{
          width: "0.4rem",
        },
        "&::-webkit-scrollbar-track":{
          "-webkit-box-shadow": "insert 0 0 6px rgba(0, 0, 0, 0.00)",
        },
        "&::-webkit-scrollbar-thumb":{
          backgroundColor:"#757575",
          outline: "1px solid slategray",
        },
      }}>
        <Box maxHeight={'250px'}>
        {children}
        </Box>
        </Box>
      </Box>
      {!hiddenViewButton && length!==0  && (
        <Box p={2} >
          <ButtonBase
            disableRipple
            sx={{
              margin: "auto",
              display: "block",
              color: "primary.main"
            }}
          >
            View all Notifications
          </ButtonBase>
        </Box>
      )}
    </Popover>
  )
}

export default PopoverLayout
