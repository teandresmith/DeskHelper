import {
  Box,
  Button,
  Checkbox,
  Grid,
  Pagination,
  Stack,
  Typography,
} from '@mui/material'
import Ticket from './Ticket'

type Props = {}

const TicketListSection = (props: Props) => {
  return (
    <Box component='main' sx={{ width: '75%', height: '100%', pt: 1 }}>
      <Box component='div' sx={{ p: 1, borderBottom: '1px solid darkgrey' }}>
        <Typography variant='h6'>All Tickets</Typography>
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
      <Grid container alignItems={'center'} sx={{ pb: 1 }}>
        <Grid item xs={4}>
          <Stack direction='row' spacing={1} alignItems='center'>
            <Checkbox disabled />
            <Typography>Requester</Typography>
          </Stack>
        </Grid>
        <Grid item xs={4}>
          <Typography>Subject</Typography>
        </Grid>
        <Grid item xs={1}>
          <Typography>Assignee</Typography>
        </Grid>
        <Grid item xs={1}>
          <Typography>Status</Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography variant='subtitle1' sx={{ textTransform: 'capitalize' }}>
            Last Message
          </Typography>
        </Grid>
      </Grid>
      <Ticket />
      <Ticket />
      <Ticket />
      <Ticket />
      <Ticket />
      <Ticket />
    </Box>
  )
}

export default TicketListSection
