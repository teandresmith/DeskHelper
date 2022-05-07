import { Search } from '@mui/icons-material'
import { IconButton, Paper } from '@mui/material'
import { MHFTextField } from 'mui-hook-form-mhf'
import { useForm } from 'react-hook-form'

type Props = {}

const Searchbar = (props: Props) => {
  const methods = useForm()

  return (
    <MHFTextField
      name='search'
      type='search'
      control={methods.control}
      label='Search All Tickets'
      fullWidth
      margin='none'
    />
  )
}

export default Searchbar
