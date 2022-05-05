import { Notifications } from '@mui/icons-material'
import { Mail } from '@mui/icons-material'
import { Person } from '@mui/icons-material'
import {
  AppBar,
  Avatar,
  Badge,
  BadgeMark,
  BadgeRoot,
  Box,
  InputBase,
  InputLabel,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from '@mui/material'
import { flexbox, styled } from '@mui/system'
import React, { useState } from 'react'

const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
})

const Search = styled('div')(({ theme }) => ({
  backgroundColor: 'white',
  padding: '0 10px',
  borderRadius: theme.shape.borderRadius,
  width: '40%',
}))

const Icons = styled(Box)(({ theme }) => ({
  display: 'none',
  alignItems: 'center',
  gap: '20px',
  [theme.breakpoints.up('sm')]: {
    display: 'flex',
  },
}))

const UserBox = styled(Box)(({ theme }) => ({
  display: 'none',
  alignItems: 'center',
  gap: '10px',
  [theme.breakpoints.down('sm')]: {
    display: 'flex',
  },
}))

const Navbar = () => {
  const [open, setOpen] = useState(false)
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: 'none', sm: 'block' } }}>
          {' '}
          Hello User
        </Typography>
        <Person sx={{ display: { xs: 'block', sm: 'none' } }} />
        <Search>
          <InputBase placeholder="Search..."></InputBase>
        </Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <Mail />
          </Badge>
          <Badge badgeContent={4} color="error">
            <Notifications />
          </Badge>
          <Avatar
            sx={{ wdith: '30', height: '30' }}
            onClick={(e) => setOpen(true)}
            src="https://64.media.tumblr.com/9d26a4bf27480aa4e2579a6238671666/d9fcda279fb1d1ae-4b/s540x810/511b2677fa623fa19904edd00791a46bea94e8b7.jpg"
          />
        </Icons>
        <UserBox onClick={(e) => setOpen(true)}>
          <Avatar
            sx={{ wdith: '30', height: '30' }}
            src="https://64.media.tumblr.com/9d26a4bf27480aa4e2579a6238671666/d9fcda279fb1d1ae-4b/s540x810/511b2677fa623fa19904edd00791a46bea94e8b7.jpg"
          />
          <Typography variant="span">SRK</Typography>
        </UserBox>
        <Menu
          id="demo-positioned-menu"
          aria-labelledby="demo-positioned-button"
          open={open}
          onClose={(e) => setOpen(false)}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
        >
          <MenuItem>Profile</MenuItem>
          <MenuItem>My account</MenuItem>
          <MenuItem>Logout</MenuItem>
        </Menu>
      </StyledToolbar>
    </AppBar>
  )
}

export default Navbar
