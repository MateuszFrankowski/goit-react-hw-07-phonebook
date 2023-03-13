import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from '@reduxjs/toolkit';
import { loadFromMockStorage } from 'MockStorageHandlers/MockStorageHandlers';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [loadFromMockStorage.pending](state) {
      state.isLoading = true;
    },
    [loadFromMockStorage.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.contacts = action.payload;
    },
    [loadFromMockStorage.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { addContactAction, deleteContactAction } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
