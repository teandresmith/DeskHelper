import { Stack } from '@mui/material'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import TicketPage from './components/screens/TicketPage'
import SideNavbar from './components/SideNavbar'

const App = () => {
  return (
    <Stack direction='row' sx={{ width: '100%', height: '100%' }}>
      <SideNavbar />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<TicketPage />} />
        </Routes>
      </BrowserRouter>
    </Stack>
  )
}

export default App
