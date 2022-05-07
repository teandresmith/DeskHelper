import React from 'react'
import {
  AssignmentTurnedIn,
  Help,
  LocalActivity,
  PeopleAlt,
  Settings,
} from '@mui/icons-material'
import {
  Badge,
  Box,
  Stack,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  Avatar,
} from '@mui/material'

type SideNavbarProps = {}

const SideNavbar = () => {
  const [selected, setSelected] = React.useState('Tickets')

  const handleListItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: string
  ) => {
    setSelected(index)
  }
  return (
    <Box
      component='nav'
      sx={{
        width: '5%',
        height: '100vh',
        backgroundColor: '#555858',
        position: 'sticky',
        top: 0,
        left: 0,
      }}
    >
      <Stack
        direction='column'
        justifyContent={'space-between'}
        sx={{ width: '100%', height: '100%', pt: 1 }}
      >
        <List
          disablePadding
          sx={{
            '& .MuiButtonBase-root.MuiListItemButton-root.Mui-selected': {
              backgroundColor: 'orange',
            },
          }}
        >
          <ListItemButton
            disableGutters
            sx={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <ListItemIcon
              sx={{
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <AssignmentTurnedIn fontSize='large' sx={{ color: 'white' }} />
            </ListItemIcon>
          </ListItemButton>
          <ListItemButton
            selected={selected === 'Tickets'}
            onClick={(e) => handleListItemClick(e, 'Tickets')}
            disableGutters
            sx={{
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'column',
              mt: 1,
            }}
          >
            <ListItemIcon
              sx={{
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <Badge badgeContent={2} color='secondary'>
                <LocalActivity sx={{ color: 'white' }} />
              </Badge>
            </ListItemIcon>
            <ListItemText secondary='Tickets' />
          </ListItemButton>
          <ListItemButton
            disableGutters
            onClick={(e) => handleListItemClick(e, 'Members')}
            selected={selected === 'Members'}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'column',
              mt: 1,
            }}
          >
            <ListItemIcon
              sx={{
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <PeopleAlt sx={{ color: 'white' }} />
            </ListItemIcon>
            <ListItemText secondary='Members' />
          </ListItemButton>
        </List>
        <Box>
          <List
            disablePadding
            sx={{
              '& .MuiButtonBase-root.MuiListItemButton-root.Mui-selected': {
                backgroundColor: 'orange',
              },
            }}
          >
            <ListItemButton
              disableGutters
              onClick={(e) => handleListItemClick(e, 'Settings')}
              selected={selected === 'Settings'}
              sx={{
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column',
              }}
            >
              <ListItemIcon
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                <Settings sx={{ color: 'white' }} />
              </ListItemIcon>
              <ListItemText secondary='Settings' />
            </ListItemButton>
            <ListItemButton
              selected={selected === 'Help'}
              onClick={(e) => handleListItemClick(e, 'Help')}
              disableGutters
              sx={{
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column',
              }}
            >
              <ListItemIcon
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                <Help sx={{ color: 'white' }} />
              </ListItemIcon>
              <ListItemText secondary='Help' />
            </ListItemButton>
          </List>
          <Divider />
          <Box
            sx={{
              pt: 2,
              pb: 2,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ backgroundColor: 'orange', color: 'white' }}>
              TS
            </Avatar>
          </Box>
        </Box>
      </Stack>
    </Box>
  )
}

export default SideNavbar
