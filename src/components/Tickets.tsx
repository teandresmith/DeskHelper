import { Grid, Stack, Checkbox, Typography } from '@mui/material'
import Ticket from './Ticket'

type Props = {}

const Tickets = (props: Props) => {
  return (
    <>
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
      {[1, 2, 3, 4].map(() => (
        <Ticket />
      ))}
    </>
  )
}

export default Tickets
