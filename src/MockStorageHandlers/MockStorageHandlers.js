import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
axios.defaults.baseURL = 'https://640dce74b07afc3b0db699fd.mockapi.io';

export const saveToMockStorage = createAsyncThunk(
  'contacts/fetchAll',
  async (newContact, thunkAPI) => {
    const response = await axios.put('/contacts', newContact);
    try {
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const loadFromMockStorage = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    const response = await axios.get('/contacts');
    return response.data;
  }
);
