import { configureStore } from '@reduxjs/toolkit'
import filterContactsSlice from './filterContactsSlice'
import phoneBookSlice from './phoneBookSlice'


export const store = configureStore({
    reducer:{
        contacts: phoneBookSlice,
        filter: filterContactsSlice,
    }
})