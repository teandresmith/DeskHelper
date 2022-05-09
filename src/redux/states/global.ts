import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  page: 'Tickets',
  settings: {},
}

const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    setPage: (state, action) => {
      state = action.payload
    },
  },
})

export const { setPage } = globalSlice.actions

export default globalSlice.reducer
