// import { TabContext, TabList, TabPanel } from "@mui/lab"
import { Badge, Box, IconButton, styled, Tab, useTheme } from "@mui/material"
import FlexBox from "../../components/FlexBox"
import { H6, Paragraph, Tiny } from "../../components/Typography"
// import UkoAvatar from "components/UkoAvatar"
// import NotificationsIcon from "icons/NotificationsIcon"
import Notifications from '@mui/icons-material/Notifications';
import { Fragment, useRef, useState } from "react"
import PopoverLayout from "./PopoverLayout"

// dummy  data
const messages = [
  {
    id: "5e8883f1b51cc1956a5a1ec0",
    createdAt: Date.now(),
    title: "Your order is placed",
    type: "new_message",
    name: "Anil Jain",
    message: "Changed an issue from in this project",
    image: "/static/avatar/001-man.svg"
  },
  {
    id: "5e8883f7ed1486d665d8be1e",
    createdAt: Date.now(),
    description: "You have 32 unread messages",
    title: "New message received",
    type: "new_message",
    name: "Manoj Soni",
    message: "Nice Work! You really nailed it. Keep it Up Man",
    image: "/static/avatar/002-girl.svg"
  },
  {
    id: "5e8883fca0e8612044248ecf",
    createdAt: Date.now(),
    description: "Dummy text",
    title: "Your item is shipped",
    type: "item_shipped",
    name: "Anil Jain",
    message: "Nice Work! You really nailed it. Keep it Up Man",
    image: "/static/avatar/004-woman.svg"
  }
]

// styled components
const StyledTab = styled(Tab)(() => ({
  width: "50%",
  marginLeft: 0,
  marginRight: 0
}))

const NotificationsPopover = () => {
  const anchorRef = useRef(null)
  const [open, setOpen] = useState(false)

  // unread messages
  const unreadMsg = messages.filter(item => item.type === "new_message")

  return (
    <Fragment>
      <IconButton ref={anchorRef} onClick={() => setOpen(true)}>
        <Badge color="error" badgeContent={0}>
          <Notifications sx={{ color: "white" }}/>
        </Badge>
      </IconButton>

      <PopoverLayout
        title="Notifications"
        popoverOpen={open}
        anchorRef={anchorRef}
        popoverClose={() => setOpen(false)}
      >
          {messages.length === 0 ? (
            <Paragraph fontWeight="500" textAlign="center" p={2}>
              There are no notifications
            </Paragraph>
          ) : (
            <Box>
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
  const theme = useTheme()
  const colorbg = theme.palette.mode === "light" ? "secondary.light" : "divider"

  return (
    <FlexBox
      p={2}
      ml={2}
      mr={2}
      alignItems="center"
      sx={{
        // borderBottom: 1,
        cursor: "pointer",
        borderColor: "divider",
        backgroundColor: msg.type === "new_message" ? colorbg : "transparent",
        "&:hover": { backgroundColor: colorbg }
      }}
    >
      <Box>
        <H6>{msg.name}</H6>
        <Tiny display="block" fontWeight={500} color="text.disabled">
          {msg.message}
        </Tiny>
      </Box>
    </FlexBox>
  )
}

export default NotificationsPopover
