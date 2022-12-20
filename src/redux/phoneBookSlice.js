import { createSlice } from "@reduxjs/toolkit";
import { initContacts } from "components/App";
import { nanoid } from 'nanoid';
import { toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';


const phoneBookSlice = createSlice({
    name: 'phoneBook',
    initialState:{
        contacts:initContacts
    },

    reducers:{
        addNewCotact(state, action){
            const name = action.payload.name;
            const number = action.payload.number

            const checkContact = state.contacts.find(item =>item.name === name);
            // const checkContact = contacts.some(item => item.name === name);
            
            if (checkContact  !== undefined) {
                toast.error(`${name} is already in contacts.`)
            }else{
                state.contacts.push({
                    id: nanoid(),
                    name,
                    number,
                })
            }
            
        },
        deleteContact(state, action){
            const contactId = action.payload.id
            state.contacts = state.contacts.filter(contact => contact.id !== contactId)
        },

    }

});


export const {addNewCotact, deleteContact}  = phoneBookSlice.actions;

export default phoneBookSlice.reducer

