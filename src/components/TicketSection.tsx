import {
  Box,
  Button,
  Chip,
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  Stack,
  Typography,
} from '@mui/material'
import Searchbar from './Searchbar'

type Props = {}

const TicketSection = (props: Props) => {
  return (
    <Box
      component='div'
      sx={{
        width: '25%',
        backgroundColor: 'rgba(234, 253, 254, 0.85)',
        pt: 1,
        borderRight: '3px solid lightgrey',
        maxHeight: '100%',
      }}
    >
      <Stack
        direction='row'
        justifyContent={'space-between'}
        alignItems={'center'}
        sx={{ borderBottom: '1px solid darkgrey', p: 1 }}
      >
        <Typography variant='h5'>Tickets</Typography>
        <Button color='primary' variant='contained' size='small'>
          + New Ticket
        </Button>
      </Stack>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignContent: 'center',
          pt: 2,
          ml: 1,
          mr: 1,
        }}
      >
        <Searchbar />
      </Box>

      <Box component='div' sx={{ p: 4 }}>
        <Box component='div' sx={{ pb: 2 }}>
          <Typography variant='h6'>All Tickets</Typography>
        </Box>

        <List>
          <ListItemButton disableGutters>
            <Stack
              direction='row'
              justifyContent='space-between'
              sx={{ width: '100%' }}
            >
              <ListItemText primary='Hello' />
              <Chip label='5' />
            </Stack>
          </ListItemButton>
          <ListItem disableGutters secondaryAction={<Chip label='5' />}>
            <ListItemText primary='Unassigned Tickets' />
          </ListItem>
          <ListItem disableGutters secondaryAction={<Chip label='3' />}>
            <ListItemText primary='My Open Tickets' />
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem disableGutters secondaryAction={<Chip label='3' />}>
            <ListItemText primary='Open' />
          </ListItem>
          <ListItem disableGutters secondaryAction={<Chip label='3' />}>
            <ListItemText primary='Pending' />
          </ListItem>
          <ListItem disableGutters secondaryAction={<Chip label='3' />}>
            <ListItemText primary='On Hold' />
          </ListItem>
          <ListItem disableGutters secondaryAction={<Chip label='3' />}>
            <ListItemText primary='Solved' />
          </ListItem>
          <ListItem disableGutters secondaryAction={<Chip label='3' />}>
            <ListItemText primary='Closed' />
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem disableGutters secondaryAction={<Chip label='3' />}>
            <ListItemText primary='Spam' />
          </ListItem>
          <ListItem disableGutters secondaryAction={<Chip label='3' />}>
            <ListItemText primary='Trash' />
          </ListItem>
        </List>
      </Box>
    </Box>
  )
}

export default TicketSection
