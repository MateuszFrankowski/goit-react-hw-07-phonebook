import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
axios.defaults.baseURL = 'https://640dce74b07afc3b0db699fd.mockapi.io';

export const addContact = createAsyncThunk(
  'contacts/fetchAll',
  async (newContact, thunkAPI) => {
    const response = await axios.post('/contacts', newContact);
    try {
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const loadContacts = createAsyncThunk(
  'contacts/loadContacts',
  async (_, thunkAPI) => {
    const response = await axios.get('/contacts');
    return response.data;
  }
);
export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (taskId, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${taskId}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
