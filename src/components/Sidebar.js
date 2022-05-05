import { Box, Switch } from '@mui/material'
import React from 'react'
import { List } from '@mui/material'
import { ListItem, ListItemButton, ListItemText, ListItemIcon } from '@mui/material'
import { Inbox } from '@mui/icons-material'
import { Home } from '@mui/icons-material'
import { Person } from '@mui/icons-material'
import { Settings } from '@mui/icons-material'
import { Groups } from '@mui/icons-material'
import { Pages } from '@mui/icons-material'
import { Storefront } from '@mui/icons-material'
import { People } from '@mui/icons-material'
import { PeopleAlt } from '@mui/icons-material'
import { Brightness3 } from '@mui/icons-material'
import { Label } from '@mui/icons-material'
import { ModeNight } from '@mui/icons-material'
const Sidebar = ({ mode, setMode }) => {
  return (
    <Box
      flex={1}
      p={2}
      sx={{
        display: { xs: 'none', sm: 'block' },
      }}
    >
      <Box sx={{ position: 'fixed' }}>
        Sidebar
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon component="a" href="#homepage">
                <Home />
              </ListItemIcon>
              <ListItemText primary="Homepage" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon component="a" href="#Pages">
                <Pages />
              </ListItemIcon>
              <ListItemText primary="Pages" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon component="a" href="#Groups">
                <Groups />
              </ListItemIcon>
              <ListItemText primary="Groups" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon component="a" href="#Marketplace">
                <Storefront />
              </ListItemIcon>
              <ListItemText primary="Marketplace" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon component="a" href="#Friends">
                <PeopleAlt />
              </ListItemIcon>
              <ListItemText primary="Friends" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon component="a" href="#Settings">
                <Settings />
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon component="a" href="#Profile">
                <Person />
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon component="a" href="#Profile">
                <ModeNight />
              </ListItemIcon>
              <Switch onChange={(e) => setMode(mode === 'light' ? 'dark' : 'light')} />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  )
}

export default Sidebar
