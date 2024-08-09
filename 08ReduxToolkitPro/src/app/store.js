import { configureStore } from '@reduxjs/toolkit'
import createReducer from '../features/Counter/counterSlice'

export const store = configureStore({
  reducer: {
    counter: createReducer
  },
})