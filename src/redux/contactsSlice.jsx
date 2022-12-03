import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const contactsSlise = createSlice({
  name: 'contacts',
  initialState: initialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(id, name, number) {
        return {
          payload: {
            id,
            name,
            number,
          },
        };
      },
    },
    deleteContact(state, action) {
      const index = state.findIndex(contact => contact.id === action.payload);
      state.splice(index, 1);
    },
    setContacts(state, action) {
      state = action.payload;
      console.log(action);
      console.log(state);
    },
  },
});

export const { addContact, deleteContact, setContacts } = contactsSlise.actions;
export const contactsReducer = contactsSlise.reducer;
