import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './ContactsSlice';
import { filterReducer } from './FilterSlice';
import { saveToMockStorage } from 'MockStorageHandlers/MockStorageHandlers';
export const Store = configureStore({
  reducer: { contacts: contactsReducer, filter: filterReducer },
});
Store.subscribe(() => {
  const { contacts } = Store.getState();
  saveToMockStorage(contacts);
});
