import { configureStore } from '@reduxjs/toolkit'
import userSlice from './reducers/userSlice'

const store = configureStore({
    reducer: userSlice,
})

export default store;