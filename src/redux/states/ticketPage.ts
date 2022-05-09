import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState = {
  ticketCategory: 'All Tickets',
}

const ticketPageSlice = createSlice({
  name: 'ticketPage',
  initialState,
  reducers: {
    setTicketCategory: (state, action: PayloadAction<string>) => {
      state.ticketCategory = action.payload
    },
  },
})

export const { setTicketCategory } = ticketPageSlice.actions

export default ticketPageSlice.reducer
