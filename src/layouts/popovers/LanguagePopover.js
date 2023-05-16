import { Box, IconButton, MenuItem, Popover, styled, Avatar, Typography } from "@mui/material"
import { H6 } from "../../components/Typography"
import { useRef, useState, useEffect } from "react"
import { Language } from "@mui/icons-material"
import i18next from "i18next";
// dummy language options
const languageOptions = {
  en: {
    icon: "E",
    label: "English"
  },
  te: {
    icon: "T",
    label: "Telgu"
  }
  //   hi: {
  //     icon: '/static/flags/in.png',
  //     label: 'Hindi',
  //   },
}

// custom styled components
const IconWrapper = styled(Box)(() => ({
  display: "flex",
  height: 20,
  width: 20,
  "& img": {
    width: "100%",
    borderRadius: "50%",
    objectFit: "cover"
  }
}))

const ItemWrapper = styled(Box)(() => ({
  display: "flex",
  "& img": { width: "100%" }
}))

const LanguagePopover = (props) => {
  const {
    onChange
  } = props
  
  const anchorRef = useRef(null)
  const [open, setOpen] = useState(false)
  const [language, setLanguage] = useState('E')
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  useEffect(() => {
    if(localStorage.getItem('i18nextLng') === 'te') {
      setLanguage('T');
    }
     else {
      setLanguage('E');
     }
 }, []);

  const handleChangeLanguage = language => {
    
    setOpen(false);
    if (language==='en')
    {
      // onChange('en');
      setLanguage('E');
      i18next.changeLanguage('en');
    }
    else
    {
      // onChange('te');
      setLanguage('T');
      i18next.changeLanguage('te');
    }

    
  }

  return (
    <>
      <IconButton onClick={handleOpen} ref={anchorRef} >
        <IconWrapper >
        <Avatar sx={{ bgcolor: 'white',color:'black', width:21, height:21 }}><Typography p={2} fontSize={12} fontWeight={600} color='grey'>{language}</Typography></Avatar>
          {/* <Language sx={{ color: "white" }} /> */}
          {/* <img alt={selectedLanguage.label} src={selectedLanguage.icon} /> */}
        </IconWrapper>
      </IconButton>
      <Popover
        keepMounted
        open={open}
        onClose={handleClose}
        anchorEl={anchorRef.current}
        anchorOrigin={{ horizontal: "center", vertical: "bottom" }}
        PaperProps={{ sx: { width: 150, padding: "0.5rem 0" } }}
      >
        {Object.keys(languageOptions).map(language => (
          <MenuItem
            key={languageOptions[language].label}
            onClick={() => handleChangeLanguage(language)}
          >
            <ItemWrapper>
              <H6 fontWeight={600} ml={1}>
                {languageOptions[language].label}
              </H6>
            </ItemWrapper>
          </MenuItem>
        ))}
      </Popover>
    </>
  )
}

export default LanguagePopover
