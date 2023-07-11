import { configureStore } from '@reduxjs/toolkit'
import contentSlice from './contentSlice'

export const store = configureStore({
  reducer: {
    content: contentSlice,
  },
})