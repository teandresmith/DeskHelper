import { configureStore } from '@reduxjs/toolkit'
import ticketPageReducer from './states/ticketPage'
import globalReducer from './states/global'

export const store = configureStore({
  reducer: {
    ticketPage: ticketPageReducer,
    global: globalReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
