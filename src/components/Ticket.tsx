import {
  Avatar,
  Card,
  CardContent,
  Checkbox,
  Chip,
  Grid,
  Stack,
  Typography,
} from '@mui/material'

type Props = {}

const Ticket = (props: Props) => {
  return (
    <>
      <Card elevation={0}>
        <CardContent sx={{ pt: 1, pb: 0, pl: 0, pr: 0 }}>
          <Grid container alignItems='center'>
            <Grid item xs={4}>
              <Stack
                direction='row'
                spacing={2}
                alignItems='center'
                justifyContent={'flex-start'}
              >
                <Checkbox disabled />
                <Avatar>TS</Avatar>
                <Stack direction='column' spacing={0}>
                  <Typography>Johnny Brown</Typography>
                  <Typography>jbwon@gmail.com</Typography>
                </Stack>
              </Stack>
            </Grid>
            <Grid item xs={4}>
              <Typography>Sale Question</Typography>
            </Grid>
            <Grid item xs={1}>
              <Typography>Marcus</Typography>
            </Grid>
            <Grid item xs={1}>
              <Chip label='Open' sx={{ backgroundColor: 'lightblue' }} />
            </Grid>
            <Grid item xs={1}>
              <Typography>12 Sep 2021</Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  )
}

export default Ticket
