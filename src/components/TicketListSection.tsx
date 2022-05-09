import { Box, Button, Pagination, Stack, Typography } from '@mui/material'
import { useAppSelector } from '../hooks/reduxHooks'
import Tickets from './Tickets'

type Props = {}

const TicketListSection = (props: Props) => {
  const ticketCategory = useAppSelector(
    (state) => state.ticketPage.ticketCategory
  )
  return (
    <Box component='main' sx={{ width: '75%', height: '100%', pt: 1 }}>
      <Box component='div' sx={{ p: 1, borderBottom: '1px solid darkgrey' }}>
        <Typography variant='h6'>{ticketCategory}</Typography>
      </Box>
      <Box sx={{ p: 1, borderBottom: '1px solid lightgrey' }}>
        <Button variant='outlined'>+ Add Filter</Button>
      </Box>
      <Stack
        direction='row'
        justifyContent={'space-between'}
        alignItems={'center'}
        sx={{ p: 1 }}
      >
        <Typography>100 Tickets</Typography>
        <Pagination shape='rounded' />
      </Stack>

      <Tickets />
    </Box>
  )
}

export default TicketListSection
