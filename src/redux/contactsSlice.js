import { createSlice } from '@reduxjs/toolkit';

const contactsInitialState = [
  { id: 'id-1', name: 'Kim Namjoon', number: '459-12-56' },
      { id: 'id-2', name: 'Park Jimin', number: '443-89-12' },
      { id: 'id-3', name: 'Min Yoongi', number: '645-17-79' },
      { id: 'id-4', name: 'Jeon Jungkook', number: '227-91-26' },
];

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addContacts(state, action) {
      state.push(action.payload);
    },

    deleteContacts(state, action) {
      const index = state.findIndex(contact => contact.id === action.payload);
      state.splice(index, 1);
    },
  },
});

export const { deleteContacts, addContacts } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
