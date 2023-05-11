import { Avatar, Badge, Box, Divider, Grid, IconButton, styled, Tab, Tooltip, Typography, useTheme } from "@mui/material"
import FlexBox from "../flexbox/FlexBox"
import {H4, H6, Paragraph, Tiny } from "../typography/Typography"
import Notifications from '@mui/icons-material/Notifications';
import { Fragment, useRef, useState } from "react"
import PopoverLayout from "./PopoverLayout"
import ScheduleIcon from '@mui/icons-material/Schedule';
import NotificationsPausedIcon from '@mui/icons-material/NotificationsPaused';

// dummy  data
const hours = new Date().getHours();
const mins = new Date().getMinutes();
const messages = [
  {
    id: "5e8883f1b51cc1956a5a1ec0",
    createdAt: `${hours-2}:${Math.abs(mins-20)}`,
    title: "Your order is placed",
    type: "new_message",
    name: "Chiranjit Dey",
    message: "Changed an issue from in this project. Changed an issue from in this project. Changed an issue from in this project.",
    // image: "/static/avatar/001-man.svg"
  },
  {
    id: "5e8883f7ed1486d665d8be1e",
    createdAt: `${hours-4}:${Math.abs(mins-40)}`,
    description: "You have 32 unread messages",
    title: "New message received",
    type: "new_message",
    name: "Robin Sharma",
    message: "Nice Work! You really nailed it. Keep it Up Man",
    // image: "/static/avatar/002-girl.svg"
  },
  {
    id: "5e8883fca0e8612044248ecf",
    createdAt: `${hours-6}:${Math.abs(mins-10)}`,
    description: "Dummy text",
    title: "Your item is shipped",
    type: "item_shipped",
    name: "Admin",
    message: "Nice Work! You really nailed it. Keep it Up Man",
    // image: "/static/avatar/004-woman.svg"
  },
  {
    id: "5e8883fca0e8612044248ecf",
    createdAt: `${hours-6}:${Math.abs(mins-10)}`,
    description: "Dummy text",
    title: "Your item is shipped",
    type: "item_shipped",
    name: "Admin",
    message: "Nice Work! You really nailed it. Keep it Up Man",
    // image: "/static/avatar/004-woman.svg"
  },
  {
    id: "5e8883fca0e8612044248ecf",
    createdAt: `${hours-6}:${Math.abs(mins-10)}`,
    description: "Dummy text",
    title: "Your item is shipped",
    type: "item_shipped",
    name: "Admin",
    message: "Nice Work! You really nailed it. Keep it Up Man",
    // image: "/static/avatar/004-woman.svg"
  },
  {
    id: "5e8883fca0e8612044248ecf",
    createdAt: `${hours-6}:${Math.abs(mins-10)}`,
    description: "Dummy text",
    title: "Your item is shipped",
    type: "item_shipped",
    name: "Admin",
    message: "Nice Work! You really nailed it. Keep it Up Man",
    // image: "/static/avatar/004-woman.svg"
  },
  {
    id: "5e8883fca0e8612044248ecf",
    createdAt: `${hours-6}:${Math.abs(mins-10)}`,
    description: "Dummy text",
    title: "Your item is shipped",
    type: "item_shipped",
    name: "Admin",
    message: "Nice Work! You really nailed it. Keep it Up Man",
    // image: "/static/avatar/004-woman.svg"
  },
  {
    id: "5e8883fca0e8612044248ecf",
    createdAt: `${hours-6}:${Math.abs(mins-10)}`,
    description: "Dummy text",
    title: "Your item is shipped",
    type: "item_shipped",
    name: "Admin",
    message: "Nice Work! You really nailed it. Keep it Up Man",
    // image: "/static/avatar/004-woman.svg"
  },
  {
    id: "5e8883fca0e8612044248ecf",
    createdAt: `${hours-6}:${Math.abs(mins-10)}`,
    description: "Dummy text",
    title: "Your item is shipped",
    type: "item_shipped",
    name: "Admin",
    message: "Nice Work! You really nailed it. Keep it Up Man",
    // image: "/static/avatar/004-woman.svg"
  },
  
]

// styled components
const StyledTab = styled(Tab)(() => ({
  width: "50%",
  marginLeft: 0,
  marginRight: 0
}))
const title =  <H4 color="#ffffff">Notifications</H4> 
const notificationCount = messages.length !== 0 ? <Paragraph color="#ffffff">{messages.length} New</Paragraph> : ''
const NotificationsPopover = () => {
  const [badge, setBadge] = useState(messages.length);
  const badgeCount = () =>{
    setBadge(null)
  }
  const anchorRef = useRef(null)
  const [open, setOpen] = useState(false)

  // unread messages
  const unreadMsg = messages.filter(item => item.type === "new_message")

  return (
    <Fragment>
      <Tooltip arrow title='Notifications'>
      <IconButton ref={anchorRef} onClick={() => setOpen(true)}>
        <Badge color="error" badgeContent={badge}>
          <Notifications sx={{ color: "white" }} onClick={badgeCount}/>
        </Badge>
      </IconButton>
      </Tooltip>

      <PopoverLayout
        length={messages.length}
        title={title}
        notificationCount = {notificationCount}
        popoverOpen={open}
        anchorRef={anchorRef}
        popoverClose={() => setOpen(false)}
      >
          {messages.length === 0 ? (
            <> 
              <Grid display={'flex'} justifyContent='center' pt={2}>
                <NotificationsPausedIcon sx={{fontSize:100}} color='warning'/>
              </Grid>
              <Paragraph fontWeight="500" textAlign="center" p={2}>
                Hey! You have no new notifications
              </Paragraph>
            </>
          ) : (
            <Box position={'relative'}>
              {messages.map(msg => (
                <ListItem msg={msg} key={msg.id} />
              ))}
            </Box>
          )}
      </PopoverLayout>
    </Fragment>
  )
}

function ListItem({ msg }) {
//   const theme = useTheme()
//   const colorbg = theme.palette.mode === "light" ? "secondary.light" : "divider"

  return (
    <FlexBox
      pl={1}
      pr={1}
      
      mt={2}
      ml={0}
      // mr={2}
      alignItems="center"
      sx={{
        // borderBottom: 1,
        cursor: "pointer",
        borderColor: "divider",
        backgroundColor: msg.type === "new_message" ? "" : "transparent",
        // "&:hover": { backgroundColor: colorbg }
      }}
    >
      <Box>
        <Box display='flex' justifyContent='normal'>
          <Grid container xs={2.5} sm={2.5} md={2.5} lg={2.5}>
            <Avatar />
          </Grid>
          

          <Grid container xs={12} sm={12} md={12} lg={12}>
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <H6 color='#287ED6'>{msg.name}</H6>
              </Grid>
              <Grid sx={{textOverflow: 'ellipsis'}} xs={12} sm={12} md={12} lg={12}>
                <Tiny  display="block" fontWeight={600} color="text.disabled" divider>
                  {msg.message.slice(0,50)}...
                </Tiny>
              </Grid>
            {'\n'}
            <Grid item xs={12} sm={12} md={12} lg={12} display="flex" justifyContent={'left'}>
              <Grid mt={0.2}>
                  <Tiny display="block" fontWeight={500} color="text.disabled">
                    <ScheduleIcon sx={{fontSize:'13px'}}/>
                  </Tiny>
              </Grid>
              <Tiny  display="block" fontWeight={500} color="text.disabled">
               {msg.createdAt}
              </Tiny>
            </Grid>
          </Grid>
        </Box>
          <Divider variant="middle" sx={{marginTop:'7px'}}/>
      </Box>
    </FlexBox>
  )
}

export default NotificationsPopover
