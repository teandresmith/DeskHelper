import { Box, Stack } from '@mui/material'
import TicketListSection from '../TicketListSection'
import TicketSection from '../TicketSection'

type Props = {}

const TicketPage = (props: Props) => {
  return (
    <Stack direction='row' sx={{ width: '100%' }}>
      <TicketSection />
      <TicketListSection />
    </Stack>
  )
}

export default TicketPage
