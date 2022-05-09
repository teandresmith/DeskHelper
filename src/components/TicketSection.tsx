import {
  Box,
  Button,
  Chip,
  Divider,
  List,
  ListItemText,
  ListItemButton,
  Stack,
  Typography,
} from '@mui/material'
import Searchbar from './Searchbar'
import { ticketSectionData } from '../assets/data/data'

type TicketSectionProps = {}

const TicketSection = (props: TicketSectionProps) => {
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
          {ticketSectionData.ticketCategories['firstSection'].map((value) => (
            <ListItemButton disableGutters key={value}>
              <Stack
                direction='row'
                justifyContent='space-between'
                sx={{ width: '100%' }}
              >
                <ListItemText primary={value} />
                <Chip label='5' />
              </Stack>
            </ListItemButton>
          ))}
        </List>
        <Divider />
        <List>
          {ticketSectionData.ticketCategories['secondSection'].map((value) => (
            <ListItemButton disableGutters key={value}>
              <Stack
                direction='row'
                justifyContent='space-between'
                sx={{ width: '100%' }}
              >
                <ListItemText primary={value} />
                <Chip label='5' />
              </Stack>
            </ListItemButton>
          ))}
        </List>
        <Divider />
        <List>
          {ticketSectionData.ticketCategories['thirdSection'].map((value) => (
            <ListItemButton disableGutters key={value}>
              <Stack
                direction='row'
                justifyContent='space-between'
                sx={{ width: '100%' }}
              >
                <ListItemText primary={value} />
                <Chip label='5' />
              </Stack>
            </ListItemButton>
          ))}
        </List>
      </Box>
    </Box>
  )
}

export default TicketSection
